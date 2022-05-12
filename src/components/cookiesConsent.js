import React, { useEffect, useState } from "react"
import Cookies from "universal-cookie"

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(false)
  const [showCookieSetting, setShowCookieSeting] = useState(false)
  const [toggleShowMore, setToggleShowMore] = useState(false)
  const [toggleNessesory, setToggleNessesory] = useState(false)
  const cookies = new Cookies()

  const current = new Date()
  const nextYear = new Date()
  nextYear.setFullYear(current.getFullYear() + 1)
  const lv_ShownCookiePolicy = cookies.get("viewed_cookie_policy")

  useEffect(() => {
    function fnShowConsent() {
      if (lv_ShownCookiePolicy !== "yes") {
        setTimeout(async () => {
          setShowConsent(true)
        }, 2000)
      } else {
        setShowConsent(false)
      }
    }

    fnShowConsent()
  }, [lv_ShownCookiePolicy])

  return (
    <>
      <div
        className={`cli-modal ${
          showCookieSetting ? "cli-show cli-blowup" : ""
        } bg-black-custom bg-opacity-25`}
        role="dialog"
        aria-labelledby="cliSettingsPopup"
        aria-hidden="true"
      >
        <div className="cli-modal-dialog" role="document">
          <div className="p-6 cli-modal-content cli-bar-popup">
            <button
              type="button"
              className="cli-modal-close"
              onClick={() => {
                setShowCookieSeting(false)
              }}
            >
              <svg className="" viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path>
                <path d="M0 0h24v24h-24z" fill="none"></path>
              </svg>
            </button>
            <div className="cli-modal-body">
              <div className="cli-container-fluid cli-tab-container">
                <div className="cli-row">
                  <div className="cli-col-12 cli-align-items-stretch cli-px-0">
                    <div
                      className={`cli-privacy-overview ${
                        toggleShowMore ? "" : "cli-collapsed"
                      } `}
                    >
                      <p>Privacy Overview</p>
                      <br />
                      <div className="cli-privacy-content">
                        <div className="cli-privacy-content-text">
                          <p>
                            This site uses cookies to improve your experience
                            while you navigate through the website. Out of these
                            cookies, the cookies that are categorized as
                            necessary are stored on your browser as they are as
                            essential for the working of basic functionalities
                            of the website. We also use third-party cookies that
                            help us analyze and understand how you use this
                            website. These cookies will be stored in your
                            browser only with your consent. You also have the
                            option to opt-out of these cookies. But opting out
                            of some of these cookies may have an effect on your
                            browsing experience.
                          </p>
                        </div>
                      </div>
                      <p
                        aria-hidden="true"
                        className="cli-privacy-readmore"
                        data-readmore-text="Show more"
                        data-readless-text="Show less"
                        // href="#"
                        onClick={() => {
                          setToggleShowMore(!toggleShowMore)
                        }}
                      ></p>
                    </div>
                  </div>
                  <div className="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container">
                    <div className="cli-tab-section cli-privacy-tab">
                      <div className="cli-tab-header">
                        <p
                          className="cli-nav-link cli-settings-mobile"
                          // href="#"
                        >
                          Privacy Overview
                        </p>
                      </div>
                      <div className="cli-tab-content">
                        <div className="cli-tab-pane cli-fade">
                          <p>
                            This website uses cookies to improve your experience
                            while you navigate through the website. Out of these
                            cookies, the cookies that are categorized as
                            necessary are stored on your browser as they are as
                            essential for the working of basic functionalities
                            of the website. We also use third-party cookies that
                            help us analyze and understand how you use this
                            website. These cookies will be stored in your
                            browser only with your consent. You also have the
                            option to opt-out of these cookies. But opting out
                            of some of these cookies may have an effect on your
                            browsing experience.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="cli-tab-section">
                      <div
                        className={`cli-tab-header ${
                          toggleNessesory ? "cli-tab-active" : ""
                        }`}
                      >
                        <p
                          aria-hidden="true"
                          className="cli-nav-link cli-settings-mobile"
                          data-target="necessary"
                          data-toggle="cli-toggle-tab"
                          // href="#"
                          onClick={() => {
                            setToggleNessesory(!toggleNessesory)
                          }}
                        >
                          Necessary
                        </p>
                        <span className="cli-necessary-caption">
                          Always Enabled
                        </span>
                      </div>
                      <div
                        className={`cli-tab-content ${
                          toggleNessesory ? "block" : "none"
                        }`}
                      >
                        <div
                          className="cli-tab-pane cli-fade"
                          data-id="necessary"
                        >
                          <p>
                            Necessary cookies are absolutely essential for the
                            website to function properly. This category only
                            includes cookies that ensures basic functionalities
                            and security features of the website. These cookies
                            do not store any personal information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          !showConsent ? "hidden" : ""
        } bg-background pl-4 pr-4 md:pr-20 py-4 fixed bottom-0 w-full text-center flex flex-col md:flex-row justify-center z-40 md:text-left`}
      >
        <div className="flex flex-row w-full md:w-auto">
        <p className="self-center text-sm md:text-lg mr-4">
            This site uses cookies to improve your experience.
            If you want to learn more about cookies and why we use them, visit
            our{" "}
            <a className="text-blueNew-custom cursor-pointer font-bold" href="https://rudderstack.com/cookie-policy">cookie policy</a>.
            &nbsp;We'll assume you're ok with this, but you can opt-out if you wish
            <span aria-hidden="true" className="font-bold text-blueNew-custom self-center mx-2 cursor-pointer"
              onClick={() => {
                setShowCookieSeting(true)
              }}
            >Cookie&nbsp;Settings.</span>
           </p>
        </div>

        <div
          aria-hidden="true"
          className="flex flex-col justify-center my-4 sm:my-0 w-full md:w-72"
        >
          <p
            aria-hidden="true"
            className="my-4 md:my-0 md:px-10 md:py-4 md:rounded-lg md:border cursor-pointer self-center text-center w-full text-blueNew-custom font-bold
            border-none bg-darkScheme-btnPrimaryBg text-darkScheme-textPrimary py-3 lg:py-4"
            // href="#"
            onClick={() => {
              setShowConsent(false)
              cookies.set("viewed_cookie_policy", "yes", {
                path: "/",
                expires: nextYear,
              })
            }}
          >
            Accept
          </p>
        </div>
      </div>
    </>
  )
}

export default CookiesConsent
