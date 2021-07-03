<template>
  <div>
    <div class="element-table">
      <el-table style="height:200px;overflow:auto;"
                v-infinite-scroll="loadMore"
                :data="tableData">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址"> </el-table-column>
      </el-table>
    </div>
    <div class="i-table-wrapper"
         :infinite-scroll-disabled="false"
         :infinite-scroll-distance="50"
         :infinite-scroll-immediate="false"
         :infinite-scroll-delay="200"
         v-infinite-scroll="loadMore2">
      <Table :loading="loading"
             :columns="columns1"
             :data="data2"></Table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      loading: false,
      total: 0,
      columns1: [
        {
          title: 'Name',
          key: 'name',
        },
        {
          title: 'Age',
          key: 'age',
        },
        {
          title: 'Address',
          key: 'address',
        },
      ],
      data2: [

      ],
    }
  },

  mounted () {
    this.setTableHeaderStyle()
    this.fetchData()
  },
  methods: {
    setTableHeaderStyle () {
      const { height } = document
        .querySelector('.element-table')
        .getBoundingClientRect()
      console.log(height);
      document.querySelector(
        '.ivu-table-header'
      ).style = `position: fixed;`
    },

    fetchData () {
      this.loading = true
      setTimeout(() => {
        for (let index = 0; index < 15; index++) {
          const element = {
            name: 'John Brown',
            age: 18 + this.data2.length,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
          }
          this.data2.push(element)
        }
        this.loading = false
        this.total = 200
      }, 200)

    },

    loadMore2 () {
      console.log(this.loading, this.data2.length);
      const { scrollTop, clientHeight, scrollHeight } = document.querySelector('.i-table-wrapper')
      console.log(scrollTop, clientHeight, scrollHeight);
      if (!this.loading && this.data2.length < this.total) {
        this.fetchData()
        console.log('-------loadMore2------')
        console.log(this.data2, '<=====data2')
      }

    },
    loadMore () {
      this.tableData = this.tableData.concat([
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ])

      console.log('-------loadMore------')
      console.log(this.tableData, '<=====tableData')
    },
  },
}
</script>

<style lang="css">
.i-table-wrapper,
.ivu-table {
  height: 500px;
  overflow-y: auto;
}

.ivu-table-body {
  height: 100%;
}

.ivu-table td,
.ivu-table th,
.ivu-table-header thead tr th {
  height: 48px !important;
}
</style>
