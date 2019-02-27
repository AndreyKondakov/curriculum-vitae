import React, {Component} from "react";
import './Contacts.scss';

class Contacts extends Component {



  render() {
    return (
      <section className="contacts-section section" id="contacts-section">
        <div className="info">
          <span>Cherkassy, Ukraine, 18000</span>
          <span>Phone: + 38-096-327-2115 (Viber, Telegram)</span>
          <span>kondakov.andrii@gmail.com</span>
          <span>facebook.com/dr.kondakov</span>
          <span>andreykondakov@yahoo.com</span>
        </div>

      </section>
    );
  }
}

export default Contacts;