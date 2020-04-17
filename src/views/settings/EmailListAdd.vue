<template>
  <div>
    <NavHeader :headerText="headerText" :leftIcon="back" :leftIconAlt="leftIconAlt" @leftIconClicked="goBack" />

    <div class="container body-1-mobile text-left m-auto p-4 pb-6">
      <div class="mb-6"><p>To prepare your file for import, follow these steps:</p></div>

      <div class="mb-6"><p>1. In a spreadsheet program like Excel or Google Sheets, open your blank worksheet</p></div>

      <div class="mb-6">
        <p class="mb-6">2. Create and label a column for <span class="text-bold">Email Address.</span></p>
        <p class="mb-6">
          Email address is the only field that we require, but you can repeat this step for any other contact data
          fields you want to included.
        </p>
        <p><img :src="stepTwo" class="md:max-w-md lg:max-w-lg m-auto" /></p>
      </div>

      <div class="mb-6">
        <p class="mb-6">
          3. Next to your Email Address column, create and label additional columns for
          <span class="text-bold">First Name</span> and <span class="text-bold">Last Name</span>.
        </p>
        <p><img :src="stepThree" class="md:max-w-md lg:max-w-lg m-auto" /></p>
      </div>

      <div class="mb-6">
        <p class="mb-6">4. Paste your contacts’ information into the relevant fields in the spreadsheet</p>
        <p><img :src="stepFour" class="md:max-w-md lg:max-w-lg m-auto" /></p>
      </div>

      <div>
        <p>
          5. Save the file in CSV format. This option can usually be access from the File menu in your spreadsheet
          program, labeled as “Export as .CSV” or “Download as .CSV"
        </p>
      </div>
    </div>

    <hr class="mb-8 max-w-screen-lg m-auto" />

    <div class="container mb-8 m-auto">
      <form @submit.prevent="uploadCsv">
        <div class="max-w-lg">
          <label for="csv">Upload</label>
          <input name="csv" type="file" accept=".csv" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import back from '@/assets/icons/back.png';
import plus from '@/assets/icons/plus.png';
import stepTwo from '@/assets/email-list-add/step2.png';
import stepThree from '@/assets/email-list-add/step3.png';
import stepFour from '@/assets/email-list-add/step4.png';
import NavHeader from '@/components/NavHeader.vue';

export default {
  name: 'EmailListAdd',
  data() {
    return {
      back,
      plus,
      stepTwo,
      stepThree,
      stepFour,
      headerText: 'Add New List',
      leftIconAlt: 'Back'
    };
  },
  components: {
    NavHeader
  },
  methods: {
    goBack() {
      console.log('go back');
    },
    uploadCsv() {
      console.log('submitted');
    }
  }
};
</script>
