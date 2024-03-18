import { expect, it, describe, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TaskCard from "../components/TaskCard.vue";


describe("TaskCard.vue", () => {
    let wrapper: ReturnType<typeof shallowMount>;
    const data = {
        id: 1,
        title: 'Test Title',
    }

    beforeEach(() => {
        wrapper = shallowMount(TaskCard, {
            propsData: {
                task: data
            }
        })
    })
    it('Отображает введенный текст корректно', () => {
        expect(wrapper.text()).toContain(data.title);
    })
    it('Отображает кнопку удаления при наведении', async () => {
        await wrapper.find('span').trigger('mouseover')
        expect(wrapper.find('button').isVisible)
    });
    it('Кнопка не отображается при отводе курсора мыши', async () => {
        await wrapper.find('span').trigger('mouseleave')
        expect(wrapper.find('button').exists).toBeTruthy()
    });
    it('При клике на кнопку элемент удаляется из списка', async () => {
        await wrapper.find('span').trigger('mouseover')
        expect(wrapper.find('#removeButton').trigger('click'));
        expect(wrapper.emitted().remove);
    });
}) 