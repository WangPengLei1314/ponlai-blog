<template>
    <el-row type="flex" justify="center" style="margin-top:100px;">
        <el-form ref="registerForm" :model="user" :rules="rules" status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="user.pass" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="danger" icon="el-icon-upload" @click="register">注册</el-button>
            </el-form-item>
        </el-form>
    </el-row>
</template>

<script>
    export default {
        methods: {
            register () {
                this.$refs.registerForm.validate((valid) => {
                    if (valid) {
                        if (this.user.name === '张小三' && this.user.pass === '123') {
                            this.$notify({
                                type: 'success',
                                message: '恭喜你,' + this.user.name + '!',
                                duration: 3000 
                            })
                            this.$router.replace('/')
                        } else {
                            this.$message({
                                type: 'error',
                                message: '注册失败',
                                showClose: true
                            })
                        }
                    }
                    else {
                        return false
                    }
                })
            }
        },
        data () {
            return {
                user: {},
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    pass: [
                        {required: true, message: '密码不能为空', trigger: 'blur'}
                    ]
                }
            }
        }
    }
</script>