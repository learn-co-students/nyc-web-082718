fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFn) {
      // for (const element in collection) {
      //   callbackFn(collection[element], element, collection)
      // }
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const currentEl = collection[i]
          callbackFn(currentEl, i, collection)
        }
      } else {
        for (const key in collection) {
          const currentVal = collection[key]
          callbackFn(currentVal, key, collection)
        }
      }
      return collection
    },

    map: function(collection, callbackFn) {
      let newCollection = []
      // fi.each(collection, function(ele, idx, coll) {
      //   newCollection.push(callbackFn(ele, idx, coll))
      // })
      for (let i = 0; i < collection.length; i++) {
        const currentEl = collection[i]
        const transformedEl = callbackFn(currentEl, i, collection)
        newCollection.push(transformedEl)
        // newCollection = [...newCollection, transformedEl]
      }
      return newCollection
    },

    reduce: function(collection, callbackFn, acc) {
      let offset = 0
      if (acc === undefined) {
        acc = collection[0]
        offset++
      }
      for (let i = offset; i < collection.length; i++) {
        const currentEl = collection[i]
        acc = callbackFn(acc, currentEl, collection)
      }
      return acc
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
