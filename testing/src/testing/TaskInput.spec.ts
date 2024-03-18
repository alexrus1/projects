import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TaskInput from "../components/TaskInput.vue";
import TaskCard from "../components/TaskCard.vue";

describe("TaskInput.vue", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(TaskInput);
    })

    it('Кнопка добавления добавляет новое дело', async () => {
        await wrapper.find('input').setValue('Новое дела');
        await wrapper.find('button').trigger('click');
        expect(wrapper.find('button').emitted).toBe(undefined)
    })
}) 