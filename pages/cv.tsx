import React, { Fragment } from 'react'
import { Header } from '../components/Header'

export default function CV() {
  return (
    <Fragment>
      <Header />
      <main>
        <div>
          <h3>- React Developer (Javascript, Typescript, React)</h3>
          <p>
            Jul 2020 - Feb 2021. A startup that aims to to operate, orchestrate and optimize the worlds largest and most
            interconnected industrial ecosystem. Software as a service: Enterprise Resource Planning, Business Ecosystem
            Planning,
            <br />
            <br />
            <a href="https://www.rise-x.io/" target="_blank" rel="noreferrer">
              * https://www.rise-x.io/
            </a>
          </p>
        </div>

        <div>
          <h3>- Fullstack Developer (Typescript, React, React Native, Firebase, Serverless)</h3>
          <p>
            Jul 2020 - Feb 2021. Maintained and developed web application(react), order manager app (mobile). For tests,
            I&apos;ve done unit, integration and e2e. Also worked with Stripe Online Payments and CI/CD.
            <br />
            <br />
            <a href="https://restoplus.com" target="_blank" rel="noreferrer">
              * https://restoplus.com
            </a>
          </p>
        </div>

        <div>
          <h3>- Mobile Developer (Javascript, React Native, NodeJS, Digital Ocean)</h3>
          <p>
            Apr 2017 - Jul 2020. Mainly worked with a local startup Agila Innovations with a product called StreetBy.
            Maintained and improved &quot;Provider Mode&quot; of the app where the business owners/staff can manage the
            entity, products, and orders. Also worked on the backend features using hapijs and Paynamics as our payment
            gateway.
            <br />
            <br />
            <a href="https://streetby.com" target="_blank" rel="noreferrer">
              * https://streetby.com
            </a>
          </p>
        </div>
      </main>
    </Fragment>
  )
}
