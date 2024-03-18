import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TaskFooter from '../components/TaskFooter.vue';
import TaskInput from "../components/TaskInput.vue";

describe( 'TaskFooter.vue', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallowMount(TaskFooter, {
            propsData: {
                taskCount: 1
            }
        })
    })

    it('Отображает количество дел корректно', async () => {
        const input = shallowMount(TaskInput)
        await input.find('input').setValue('123')
        expect(wrapper.find('#span').text()).toBe(`Задач осталось: 1`)
    })
    it('При нажатии на кнопку все дела очищаются', async () => {
        const input = shallowMount(TaskInput)
        await input.find('input').setValue('123')
        await wrapper.find('#btn').trigger('click');
        expect(wrapper.emitted().clear).toBeTruthy();
    })
}) 
