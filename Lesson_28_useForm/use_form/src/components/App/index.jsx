import FormItem from "../FormItem";

function App() {
  return (
    <div>
      <FormItem 
        title={'Registration'}
        button={{submit: 'Registration', redirect: 'Login'}}
        info_text={'By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters.'}
        form_type={'registration'}
      />

      <FormItem 
        title={'Login'}
        button={{submit: 'Login', redirect: 'Registration'}}
        info_text={'Reset password.'}
        form_type={'login'}
      />

      <FormItem 
        title={'Reset password'}
        button={{submit: 'Send'}}
        info_text={'The temporary password is valid for 24 hours.'}
        form_type={'reset_password'}
        info_text_add={'To receive a temporary password, you must enter the email address you provided during registration.'}
      />
    </div>
  );
}

export default App;
