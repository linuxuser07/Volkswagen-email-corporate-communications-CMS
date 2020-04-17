import { MemoService } from '@whynotearth/meredith-axios';
import Vue from 'vue';
// import { companySlug } from '@/constants/app';

const defaultMemoFormData = {};

export default {
  namespaced: true,
  state: {
    form_data: {
      to: '',
      subject: '',
      description: '',
      date: ''
    },
    response_message: {
      type: '', // error, success
      message: '',
      class: '' // text-error text-success
    }
  },
  mutations: {
    update_response_message(state, payload) {
      Vue.set(state, 'response_message', payload);
    },
    update_to(state, payload) {
      Vue.set(state.form_data, 'to', payload);
    },
    update_subject(state, payload) {
      Vue.set(state.form_data, 'subject', payload);
    },
    update_description(state, payload) {
      Vue.set(state.form_data, 'description', payload);
    },
    update_date(state, payload) {
      Vue.set(state.form_data, 'date', payload);
    },
    update_form_data(state, payload) {
      Vue.set(state, 'form_data', payload);
    }
  },
  actions: {
    clear_form_data(context) {
      context.commit('update_form_data', { ...defaultMemoFormData });
      console.log('defaultMemoFormData', defaultMemoFormData);
    },
    async memo(context, payload) {
      await MemoService.memo(payload.params);
    }
  },
  getters: {
    get_to: state => state.form_data.to,
    get_subject: state => state.form_data.subject,
    get_description: state => state.form_data.description,
    get_date: state => state.form_data.date,
    get_response_message: state => state.response_message
  }
};
