import cls from './authPage.module.css';
import classNames from 'classnames';
import logo from '../../../../public/Logomark.svg';
import Logotype from '../../../../public/Logotype.svg';
import googleLogo from '../../../../public/google.png';
import { Input } from '@/shared/Input/ui/Input.tsx';
import { Button } from '@/shared/Button/ui/Button.tsx';

export const AuthPage = () => {
  return (
    <div className={classNames(cls.pageContainer)}>
      <div className={classNames(cls.imageContainer)}></div>
      <div className={classNames(cls.authMenu)}>
        <div className={classNames(cls.logoContainer)}>
          <img className={classNames(cls.logo)} src={logo} alt="logo" />
          <img className={cls.logoType} src={Logotype} alt={'brello'} />
        </div>
        <div className={classNames(cls.formContainer)}>
          <div>
            <div className={classNames(cls.headerText)}>
              <h3 className={classNames('xsSemiBoldText')}>Sign in</h3>
              <p className={classNames('mdRegularText')}>
                Start your 30-day free trial.
              </p>
            </div>
            <div className={classNames(cls.form)}>
              <div className={classNames(cls.emailContainer)}>
                <div className={classNames('smMediumText', cls.email)}>
                  Email
                </div>
                <Input placeholder={'Enter your email'} />
              </div>
              <div className={classNames(cls.signContainer)}>
                <Button type={'primary'}>
                  <span
                    className={classNames(cls.getStarted, 'mdSemiboldText')}
                  >
                    Get started
                  </span>
                </Button>
                <Button style={{ marginTop: '1.5vh' }} type={'secondary'}>
                  <span className={classNames([cls.signUpByGoogle])}>
                    <img src={googleLogo} alt="google" />
                    <span className={classNames('mdSemiboldText')}>
                      Sign up with Google
                    </span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(cls.footerContainer)}>
          <div>© Brello 2024</div>
          <div>help@brello.io</div>
        </div>
      </div>
    </div>
  );
};
