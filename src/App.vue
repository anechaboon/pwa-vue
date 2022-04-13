<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee"/>
    <employee-table :employees="employees" />
  </div>
</template>

<script>

import EmployeeTable from '@/components/EmployeeTable'
import EmployeeForm from '@/components/EmployeeForm'
export default {
  name: 'App',
  components: {
    EmployeeTable,
    EmployeeForm
  },
  data () {
    return {
      employees: [
        {
          id: 1,
          name: 'Anecha Boonthongdee',
          email: 'anecha.boon@gmail.com'
        },
        {
          id: 2,
          name: 'Anecha Boonthongdee',
          email: 'anecha.boon@gmail.com'
        },
        {
          id: 3,
          name: 'Anecha Boonthongdee',
          email: 'anecha.boon@gmail.com'
        }
      ]
    }
  },
  methods: {
    addEmployee (employee) {
      // const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
      this.employees = [...this.employees, employee]
    }
  }
}
</script>

<style>
.small-container {
  max-width: 700px;
}
</style>
