<template>
    <h1>{{ $t('auth.register.title') }}</h1>
    <n-form size="medium" :model="form" :rules="rule" label-placement="top" :show-require-mark="false">

        <n-form-item path="email" :label="$t('auth.register.email')" first>
            <n-input v-model:value="form.email" placeholder="" />
        </n-form-item>

        <n-form-item path="code" :label="$t('auth.register.code')" first>
            <n-flex :wrap="false" :size="0">
                <n-input v-model:value="form.code" :placeholder="$t('auth.register.inputPrompt.Email-Verification-Code')" :maxlength="codeValidator.length"/>
                <div style="width: 20px;"></div>
                <n-button>{{ $t('auth.register.getCode') }}</n-button>
            </n-flex>
        </n-form-item>

        <n-form-item path="password" :label="$t('auth.register.password')" first>
            <n-input v-model:value="form.password" :placeholder="$t('auth.register.inputPrompt.O-To-O-Digits-And-Contain-Number-Letter', passwordValidator.length)" />
        </n-form-item>
        
        <n-flex class="submit" :size="0">
            <n-button type="primary" secondary round style="flex: 1">{{ $t('auth.login.submit') }}</n-button>
        </n-flex>

        <n-button text @click="toLoginPage()">{{ $t('auth.register.login') }}</n-button>
    </n-form>
</template>

<script lang="ts" setup>
import { NForm, NFormItem, NInput, NButton, NFlex, type FormRules } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import verifyEMailRegExp from '@/public/EmailRegExp'
import codeValidator from '@/public/CodeValidator'
import passwordValidator from '@/public/PasswordValidator'

const { t } = useI18n()

const router = useRouter()
const toLoginPage = () => {
    router.replace('/auth/login')
}

const form = ref({
    email: '',
    code: '',
    password: ''
})

const rule: FormRules = {
    email: [
        {
            required: true,
            message: t('auth.register.validator.Email-Should-Not-Be-Empty'),
            trigger: 'input'
        },
        {
            validator(_rule, value) {
                if ( verifyEMailRegExp.test(value) ) return true
                return false
            },
            message: t('auth.register.validator.Incorrect-Email-Format'),
            trigger: 'input'
        }
    ],
    code: [
        {
            required: true,
            message: t('auth.register.validator.Code-Should-Not-Be-Empty'),
            trigger: 'input'
        },
        {
            validator(_rule, value: string) {
                if (codeValidator.regexp.test(value) && value.length === codeValidator.length) return true
                return false
            },
            message: t('auth.register.validator.Incorrect-Code-Format'),
            trigger: 'input'
        }
    ],
    password: [
        {
            required: true,
            message: t('auth.register.validator.Password-Should-Not-Be-Empty'),
            trigger: 'input'
        },
        {
            validator(_rule, value: string) {
                if (passwordValidator.regexp.number.test(value)) return true
                return false
            },
            message: t('auth.register.validator.Password-Need-Number'),
            trigger: 'input'
        },
        {
            validator(_rule, value: string) {
                if (passwordValidator.regexp.letter.test(value)) return true
                return false
            },
            message: t('auth.register.validator.Password-Need-Letter'),
            trigger: 'input'
        },
        {
            validator(_rule, value: string) {
                if (value.length >= passwordValidator.length[0]) return true
                return false
            },
            message: t('auth.register.validator.Password-Should-Longer', [passwordValidator.length[0]]),
            trigger: 'input'
        },
        {
            validator(_rule, value: string) {
                if (value.length <= passwordValidator.length[1]) return true
                return false
            },
            message: t('auth.register.validator.Password-Should-Shorter', [passwordValidator.length[1]]),
            trigger: 'input'
        }
    ]
}
</script>

<style scoped>
.submit {
    margin-bottom: 17px;
}
</style>