// register the grid component
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var filterKey = this.filterKey && this.filterKey.toLowerCase()
        var order = this.sortOrders[sortKey] || 1
        var data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    }
  })
  
  // bootstrap the demo

  
  var urls = new Vue({
      el: '#datos',
      data: {
        searchQuery:'',
        gridColumns: ["visits", "url", "shortenUrl", "createdAt"],
        gridData: [
            {"_id":"5bbe88f864a01a91d4d3d0cf","url":"https://www.w3.org/Style/Examples/007/center.en.html","shortenKey":"fSWk6q5","shortenUrl":"http://frag.me:3000/fSWk6q5","visits":0,"expire_at":"2018-10-10T23:19:20.837Z","createdAt":"2018-10-10T23:19:20.838Z","updatedAt":"2018-10-10T23:19:20.838Z","__v":0},
            {"_id":"5bbe891864a01a91d4d3d0d0","url":"https://stackoverflow.com/questions/29484431/vue-warn-cannot-find-element","shortenKey":"-sfEOlN","shortenUrl":"http://frag.me:3000/-sfEOlN","visits":2,"expire_at":"2018-10-10T23:19:52.254Z","createdAt":"2018-10-10T23:19:52.254Z","updatedAt":"2018-10-10T23:19:52.254Z","__v":0},
            {"_id":"5bbe893364a01a91d4d3d0d1","url":"https://jsfiddle.net/yyx990803/xkkbfL3L/?utm_source=website&utm_medium=embed&utm_campaign=xkkbfL3L","shortenKey":"XySvSk8","shortenUrl":"http://frag.me:3000/XySvSk8","visits":0,"expire_at":"2018-10-10T23:20:19.573Z","createdAt":"2018-10-10T23:20:19.573Z","updatedAt":"2018-10-10T23:20:19.573Z","__v":0}
        ]

      }
  })