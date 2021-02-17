window.gmynd = (function() {
 
  return {

    // JSON / Object manipulation related:
    // ===================================

    // Data is always a JSON representation of a table, which is an array
    // of objects like [{Gender:'F', Age:32}, {Gender:'M', Age:73}, ...]

    groupData: function(arr, props) {
      if (!this.isArray(props)) props = [props];
      let result = {};
      // group on the first key from the given array
      let key = props.shift();
      for (let i = 0; i < arr.length; i++) {
        let dat = arr[i];
        // make an array for every unique value for that key
        // and fill it with every row that has that value
        if (Array.isArray(dat[key])) {
          for (let j = 0; j < dat[key].length; j++) {
            let val = dat[key][j];
            if (!result[val]) {
              result[val] = []
            }
            result[val].push(dat);
          }
        } else {
          let val = dat[key];
          if (!result[val]) {
            result[val] = []
          }
          result[val].push(dat);
        }
      }

      // as long as there are keys for grouping ...
      if (props.length > 0) {
        // group every entry on the next key
        let groups = Object.entries(result);
        for (let i = 0; i < groups.length; i++) {
          res = this.groupData(groups[i][1], [...props]);
          result[groups[i][0]] = res;
        }
      }

      return result;
    },

    cumulateData: function(arr, props, calculations = []) {
      if (!this.isArray(props)) props = [props];

      let groupedData = {};

      // group all 'rows' of the original data
      for (let i = 0; i < arr.length; i++) {
        let key = arr[i][props[0]];
        for (let j = 1; j < props.length; j++) {
          key += ',' + arr[i][props[j]];
        }

        if (!groupedData[key]) {
          groupedData[key] = [];
        }

        groupedData[key].push(arr[i]);
      }

      // convert values of the object to array
      groupedData = Object.values(groupedData);
      // console.log(groupedData);

      let cumulatedData = [];
      for (let i = 0; i < groupedData.length; i++) {
        // prepare an object for the results
        let result = {};
        // put in the keys and values of props
        for (let j = 0; j < props.length; j++) {
          result[props[j]] = groupedData[i][0][props[j]];
        }
        // add the counter
        result.count = groupedData[i].length;
        // apply calculations
        for (let j = 0; j < calculations.length; j++) {
          let key = calculations[j].title;
          if (!key) key = calculations[j].value + calculations[j].method;
          // collect values to plain array
          result[key] = groupedData[i].map(x => x[calculations[j].value]);
          // console.log(result[key])

          if (calculations[j].method === "Sum") {
            result[key] = result[key].reduce((res, x) => res + x);
          }
          if (calculations[j].method === "Average") {
            result[key] = result[key].reduce((res, x) => res + x) / result.count;
          }
          if (calculations[j].method === "Min") {
            result[key] = result[key].reduce((res, x) => (res < x ? res : x));
          }
          if (calculations[j].method === "Max") {
            result[key] = result[key].reduce((res, x) => (res > x ? res : x));
          }
          if (calculations[j].method === "Median") {
            result[key] = percentile(result[key], 0.5);
          }
          if (calculations[j].method === "Percentile") {
            result[key] = percentile(result[key], calculations[j].p);
          }
        }

        cumulatedData.push(result);
      }

      return cumulatedData;

      function percentile(arr, p) {
        arr.sort();
        let l = arr.length - 1;
        let idx = l * p;
        let frac = idx % 1;
        let val0 = arr[Math.floor(idx)];
        let val1 = arr[Math.ceil(idx)];
        return val0 + (val1 - val0) * frac;
      }
    },

    mergeData: function(arr1, arr2, identifier1, identifier2 = identifier1) {
      // Kombiniert zwei Objekt-Arrays anhand einer oder zwei Identifier-Properties
      // nur Elemente, die in beiden Arrays gefunden werden, werden im Ergebnis-Array übernommen
      let mergedData = [];
      arr1.forEach(firstArrayElement => {
        let newEntry = Object.assign({}, firstArrayElement);
        arr2.forEach(secondArrayElement => {
          if (firstArrayElement[identifier1] === secondArrayElement[identifier2]) {
            for (let property in secondArrayElement) {
              if (secondArrayElement.hasOwnProperty(property)) {
                newEntry[property] = secondArrayElement[property];
              }
            }
          }

        });
        mergedData.push(newEntry);
      });
      return mergedData;
    },

    intersectData: function(baseArr, filterArr, identifier1, identifier2 = identifier1) {
      // returns JSON elements matching second JSON
      let newArr = [];
      baseArr.forEach((baseElement, i) => {
        let takeElement = false;
        filterArr.forEach(filterElement => {
          if (baseElement[identifier1] === filterElement[identifier2]) {
            takeElement = true;
          }
        });
        if (takeElement) newArr.push(baseArr[i]);
      });
      return newArr;
    },

    filterRequiredProps: function(arr, props) {
      if (!this.isArray(props)) props = [props];

      let filteredArr = [];
      arr.forEach(obj => {
        let propMissing = false;
        props.forEach(prop => {
          if (!obj.hasOwnProperty(prop)) {
            propMissing = true;
          } else {
            if (obj[prop] === undefined || obj[prop] === null || obj[prop] === "") propMissing = true;
          }
        });
        if (!propMissing) filteredArr.push(obj);
      });
      return filteredArr;
    },

    deleteDoublettes: function(arr, identifier, keepFirst = true) {
      let newArr = [];
      arr.forEach(el => {
        let isNew = true;
        newArr.forEach((takenEl, i) => {
          if (takenEl[identifier] === el[identifier]) {
            isNew = false;
            if (!keepFirst) newArr[i] = el;
          }
        });
        if (isNew) newArr.push(el);
      });
      return newArr;
    },

    getPropertyPercentages: function(arr, prop, keyName = prop + "Percentage") {
      let newArr = [...arr];
      const sum = this.getPropertySum(newArr, prop);
      newArr.forEach(obj => {
        obj[keyName] = obj[prop] / sum;
      });
      return newArr;
    },

    getPropertySegments: function(arr, prop, segmentCount, keyName = prop + "SegmentOf" + segmentCount, start = null, end = null) {
      let newArr = [...arr];
      const range = {
        start: start ? start : this.getPropertyMin(arr, prop),
        end: end ? end : this.getPropertyMax(arr, prop)
      };
      const segmentSize = Math.abs(range.end - range.start) / segmentCount;
      newArr.forEach(obj => {
        obj[keyName] = Math.floor(obj[prop] / segmentSize);
        if (obj[keyName] >= segmentCount) obj[keyName] = segmentCount - 1;
      });
      return newArr;
    },

    getPropertyRank: function(arr, prop, keyName = prop + "Rank") {
      let newArr = [...arr];
      newArr.sort(this.dynamicSort(prop));
      let i = 0;
      newArr.forEach(obj => {
        if (obj.hasOwnProperty(prop)) {
          obj[keyName] = i;
          i++;
        }
      });
      return newArr;
    },

    getObjByKeyVal: function(set, key, val) {
      // taken from https://stackoverflow.com/a/13964186
      // gibt ein Array derjenigen Objekte aus dem Array *set* zurück,
      // die den Wert *val* für die Property *key* haben
      return set.filter(obj => {
        return obj[key] === val;
      });
    },

    getFirstObjByKeyVal: function(set, key, val) {
      let arr = this.getObjByKeyVal(set, key, val);
      return arr.length > 0 ? arr[0] : null;
    },

    getPropertyMax: function(arr, prop) {
      // gibt das Maximum der Property *prop* aller Objekte im Array *arr* zurück.
      return Math.max.apply(Math, arr.map(function(obj) {
        return obj[prop] ? obj[prop] : -Infinity;
      }));
    },

    getPropertyMin: function(arr, prop) {
      // gibt das Maximum der Property *prop* aller Objekte im Array *arr* zurück.
      return Math.min.apply(Math, arr.map(function(obj) {
        return obj[prop] ? obj[prop] : Infinity;
      }))
    },

    getPropertySum: function(arr, prop) {
      //taken from https://stackoverflow.com/a/23247980
      return arr.reduce((a, b) => a + (b[prop] || 0), 0);
    },

    getExtremes: function(arr, prop) {
      return {
        "min": this.getPropertyMin(arr, prop),
        "max": this.getPropertyMax(arr, prop)
      };
    },

    arrayFromProps: function(obj, props, fallbackVal = null) {
      // puts the values of all given properties of an object into an array and returns that array.
      // useful e.g. when data over time is given like the yearly gdp of a country.
      let propArr = [];
      props.forEach(prop => {
        propArr.push(obj.hasOwnProperty(prop) ?
          obj[prop] : fallbackVal);
      });
      return propArr;
    },

    batchArrayFromProps: function(arr, props, propName, deleteProps = true, fallbackVal = null) {
      // does arrayFromProps() for every object inside a given JSON. returns the JSON.
      arr.forEach(el => {
        el[propName] = this.arrayFromProps(el, props, fallbackVal);
        if (deleteProps) this.deleteProps(el, props);
      });
      return arr;
    },

    deleteProps: function(obj, props) {
      if (!this.isArray(props)) props = [props];
      props.forEach(prop => {
        if (obj.hasOwnProperty(prop)) delete obj[prop];
      });
    },

    batchDeleteProps: function(arr, props) {
      if (!this.isArray(props)) props = [props];
      arr.forEach(el => {
        props.forEach(prop => {
          delete el[prop];
        });
      });
    },

    dynamicSort: function(prop) {
      // taken from https://stackoverflow.com/a/4760279
      // sorts Array of Object by values of a given property (multiple params possible)
      let sortOrder = 1;
      if (prop[0] === "-") {
        sortOrder = -1;
        prop = prop.substr(1);
      }
      return function(a, b) {
        let result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
        return result * sortOrder;
      }
    },

    sortJSON: function(arr, props) {
      // makes dynamicSort and dynamicSortMultiple easier to use (thus decreasing performance):
      if (!this.isArray(props)) props = [props];
      return arr.sort(this.dynamicSortMultiple(...props));
    },

    dynamicSortMultiple: function() {
      let props = arguments;
      return function(obj1, obj2) {
        let i = 0,
          result = 0,
          numberOfProperties = props.length;
        while (result === 0 && i < numberOfProperties) {
          result = utils.dynamicSort(props[i])(obj1, obj2);
          i++;
        }
        return result;
      };
    },

    download: function(blob, filename) {
      if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(blob, filename);
      } else { // Others
        let a = document.createElement("a"),
          url = URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 0);
      }
    },

    exportJSON: function(arr, pretty = true) {
      let c = JSON.stringify(arr);
      if (pretty) c = c.replaceAll('}', '\n}');
      if (pretty) c = c.replaceAll('{', '{\n\t');
      if (pretty) c = c.replaceAll(',"', ',\n\t"');
      const file = new Blob([c], { type: 'text/json' });
      this.download(file, "export.json");
    },

    // Array-related:
    // ===================================

    arraySum: function(arr) {
      //taken from https://stackoverflow.com/a/3762623
      return arr.reduce((pv, cv) => parseInt(pv) + parseInt(cv), 0);
    },

    countInArray: function(array, val) {
      // how often does given value in given array exist?
      return array.filter(item => item === val).length;
    },

    arrayAverage: function(arr, ignoreEmpty = false) {
      if (ignoreEmpty) arr = arr.filter(el => el !== null && el !== "");
      return this.arraySum(arr) / arr.length;
    },

    lastOfArray: function(arr, noEmptyValues = false) {
      let lastVal = null;
      if (noEmptyValues) {
        let i;
        for (i = arr.length - 1; i >= 0; i--)
          if (arr[i] && arr[i] !== "") break;
        lastVal = arr[i];
      } else lastVal = arr.slice(-1)[0];
      return lastVal;
    },

    shuffleArray: function(arr) {
      // taken from https://stackoverflow.com/a/2450976
      let currentIndex = arr.length,
        temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
      }
      return arr;
    },

    isArray: function(val) {
      // This way of recognizing an Array seems to be the fastest:
      return Object.prototype.toString.call(val) === '[object Array]';

      // Almost as fast:
      //return val instanceof Array;
    },


    // General helper functions
    // ========================

    isString: function(val) {
      return typeof val === 'string';
    },

    getRadiusByArea: function(area) {
      //returns circle radius of given circle area
      return Math.sqrt(area / Math.PI);
    },

    getAreaByRadius: function(r) {
      return Math.PI * r * r;
    },

    map: function(val, low1, high1, low2, high2, clipping = false) {
      // converts a value from one range of values to another
      // clipping disallows val to be outside of low1-high1
      if (clipping) {
        if (val < low1) val = low1;
        if (val > high1) val = high1;
      }
      return (val - low1) / (high1 - low1) * (high2 - low2) + low2;
    },

    random: function(low, high) {
      // returns random value inside a given value range
      if (arguments.length === 0) {
        low = 0;
        high = 1;
      } else if (arguments.length === 1 || high == undefined || high == null) {
        high = low;
        low = 0;
      }
      return Math.random() * (high - low) + low;
    },

    randomInt: function(low, high) {
      if (arguments.length === 0) {
        low = 0;
        high = 1;
      } else if (arguments.length === 1 || high == undefined || high == null) {
        high = low;
        low = 0;
      }
      return Math.floor(this.random(low, high + 1));
    },

    radians: function(deg) {
      return deg / 180 * Math.PI;
    },

    degrees: function(rad) {
      return rad / Math.PI * 180;
    },

    lerp: function(val1, val2, time) {
      return val1 + time * (val2 - val1);
    },

    distance: function(x1, y1, x2, y2) {
      return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
    },

    polarToCartesian: function(radius, angle) {
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      };
    },

    cartesianToPolar: function(x, y) {
      return {
        radius: Math.sqrt(x * x + y * y),
        angle: Math.atan2(y, x)
      };
    },

    // DATE FUNCTIONS
    // ==============

    getDuration: function(date1, date2) {
      return Math.abs(Date.parse(date1) - Date.parse(date2));
    },

  }

})()