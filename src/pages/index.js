import React from "react"
import '../components/layout.css'
import Person from '../images/bg-person.png'
import Grad from '../images/grad-bg.svg'
import FormImage from '../images/login-form.svg'
import LogoText from '../images/logo-text.svg'
import UserAvatar from '../images/user-avatar.svg'
import Lock from '../images/lock.svg'

const IndexPage = () => (
  <div>
    <div className="header">
      <img className="logo-text" src={LogoText}/>
      <nav className="nav d-f jcc">
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Contact</ul>
        <ul>Sign Up</ul>
      </nav>
    </div>
    <div className="body d-f jcc">
      <img className="person-bg" src={Person} />
      <div className="person-overlay"/>
      <img className="grad-bg" src={Grad}/>
      <section className="content">
        <div className="textual">
          <p className="t1 hvr">اتاق وضعیت</p>
          <p className="t2 hvr">نمایه و داشبود اتاق وضعیت</p>
          <button className="start-button  hvr">شروع کنید</button>
          <p className="t3 hvr">معاونت راهبری استانها و ارتباطات</p>
          <img className="motion-graphics"/>
        </div>
        <div className="slide-buttons">
          <span>•</span>
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </div>
        <div className="form d-f f-c aic">
          <img className="user-image" src={FormImage}/>
          <div className="container d-f f-c aic">
            <p className="login-text">صفحه کاربری</p>
            <div>
              <label htmlFor='username'>
                <img src={UserAvatar} className='input-image'/>
              </label>
              <input id='username' className="input"/>
            </div>
            <div>
              <label htmlFor='password'>
                <img src={Lock} className='input-image' />
              </label>
              <input id='password' type="password" className="input"/>
            </div>
            <div className="d-f jcsb aic w100">
              <div className="d-f jcc aic">
                <input type="checkbox" id='rm'/>
                <label htmlFor="rm">Remeber me</label>
              </div>
              <span>Forgot password?</span>
            </div>
            <button className="submit-button">ورود به پنل کاربری</button>
            <div className="d-f jcsb w100">
              <span>Not a member</span>
              <button className="create-account-button">Create account</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default IndexPage
