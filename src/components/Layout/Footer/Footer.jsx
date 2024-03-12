import React from 'react'
import classNames from 'classnames/bind'
import Styles from './Footer.module.scss'
import {
  FaCcDiscover,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const cx = classNames.bind(Styles)
export default function Header() {
  return (
    <footer>
      <div className={cx('footer-top-area')}>
        <div className={cx('zigzag-bottom')}></div>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div className={cx('col-md-3 col-sm-6')}>
              <div className={cx('footer-about-us')}>
                <h2>
                  u<span>Stora</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam
                  laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque
                  ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?
                </p>
                <div className={cx('footer-social')}>
                  <Link>
                    <i>
                      <FaFacebook />
                    </i>
                  </Link>
                  <Link>
                    <i>
                      <FaTwitter />
                    </i>
                  </Link>
                  <Link>
                    <i>
                      <FaYoutube />
                    </i>
                  </Link>
                  <Link href="#">
                    <i>
                      <FaLinkedin />
                    </i>
                  </Link>
                </div>
              </div>
            </div>

            <div className={cx('col-md-3 col-sm-6')}>
              <div className={cx('footer-menu')}>
                <h2 className={cx('footer-wid-title')}>User Navigation </h2>
                <ul>
                  <li>
                    <Link>My account</Link>
                  </li>
                  <li>
                    <Link>Order history</Link>
                  </li>
                  <li>
                    <Link>Wishlist</Link>
                  </li>
                  <li>
                    <Link>Vendor contact</Link>
                  </li>
                  <li>
                    <Link>Front page</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={cx('col-md-3 col-sm-6')}>
              <div className={cx('footer-menu')}>
                <h2 className={cx('footer-wid-title')}>Categories</h2>
                <ul>
                  <li>
                    <Link>Mobile Phone</Link>
                  </li>
                  <li>
                    <Link>Home accesseries</Link>
                  </li>
                  <li>
                    <Link>LED TV</Link>
                  </li>
                  <li>
                    <Link>Computer</Link>
                  </li>
                  <li>
                    <Link>Gadets</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={cx('col-md-3 col-sm-6')}>
              <div className={cx('footer-newsletter')}>
                <h2 className={cx('footer-wid-title')}>Newsletter</h2>
                <p>
                  Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!
                </p>
                <div className={cx('newsletter-form')}>
                  <form>
                    <input className={cx('button-email')} type="email" placeholder="Type your email" />
                    <input className={cx('button-submit')} type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer-bottom-area')}>
        <div className={cx('container')}>
          <div className={cx('row')}>
            <div className={cx('col-md-8')}>
              <div className={cx('copyright')}>
                <p>
                  &copy; 2015 uCommerce. All Rights Reserved.{' '}
                  <a href="http://www.freshdesignweb.com">freshDesignweb.com</a>
                </p>
              </div>
            </div>

            <div className={cx('col-md-4')}>
              <div className={cx('footer-card-icon')}>
                <i>
                  <FaCcDiscover style={{ fontSize: 25 }} />
                </i>
                <i>
                  <FaCcMastercard style={{ fontSize: 25 }} />
                </i>
                <i>
                  {' '}
                  <FaCcPaypal style={{ fontSize: 25 }} />
                </i>
                <i>
                  {' '}
                  <FaCcVisa style={{ fontSize: 25 }} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
