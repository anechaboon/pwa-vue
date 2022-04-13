<template>
    <div id="employee-from">
        <form @submit.prevent="handleSubmit" action="">
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="">Employee name</label>
                </div>
                <div class="col-md-4">
                    <input v-model="employee.name" type="text" class="form-control">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-4">
                    <label for="">Employee email</label>
                </div>
                <div class="col-md-4">
                    <input v-model="employee.email" type="text" class="form-control">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-md-8">
                    <button class="btn btn-primary pull-right">Add Employee</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'employee-form',
    data () {
        return {
            employee: {
                name: '',
                email: ''
            }
        }
    },
    methods: {
        handleSubmit () {
            this.$emit('add:employee', this.employee)
        }
    }

}
</script>

<style scoped>
    form {
        margin: 2rem;
    }
    .pull-right{
        float: right;
    }
</style>
