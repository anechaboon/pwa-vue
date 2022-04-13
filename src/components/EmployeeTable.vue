<template>
    <div id="employee-table">
        <table class="w3-table-all w3-hoverable">
            <thead>
                <tr class="w3-light-grey">
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'employee-table',
    props: {
        employees: Array
    }
}
</script>

<style scoped>
    @import url("https://www.w3schools.com/w3css/4/w3.css");
</style>
