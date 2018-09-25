import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

describe('Navbar.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Navbar);
    console.log('wt', wrapper.text());
    expect(wrapper.text()).to.include('About');
  });
});
