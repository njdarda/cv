import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import cvData from '@/data/njd.json'
import SvgIcon from '@/components/SvgIcon.vue'

describe('Header.vue', () => {
    it('renders Header', () => {
        const data = cvData.header
        data.name = 'Test Name'
        data.links[0].icon = ''

        const wrapper = mount(Header, {
            props: {
                header: cvData.header,
            },
            global: {
                stubs: {
                    'svg-icon': SvgIcon,
                },
            },
        })

        expect(wrapper.text()).toMatch('Test Name njdarda.github.io')
    })
})
