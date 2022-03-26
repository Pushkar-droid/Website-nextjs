import Head from 'next/head'
import Navbar from "../Components/Nav"
import Link from "next/Link"

export default function Personal_Details() {
  return (
    <div>
      <Head>
        <title>skilly tree payment</title>
      </Head>
      <Navbar />
      <div>
      <div className='div1'>
          <h2>ORDER SUMMARY<span>Edit</span></h2>
          <hr></hr>
          <hr></hr>
          <p>Date and Time</p>
          <h1>Friday,February 4,18:30</h1>
          <p>GMT + 5:30</p>
          <hr></hr>
          <h3>Apply Coupon<span><input type="text"></input></span></h3>
          <hr></hr>
          <table>
            <tr>
              <td>Service details</td>
              <td>Price per hour</td>
            </tr>
            <tr>
              <td>1 hour lesson</td>
              <td>Rs3,000.80</td>
            </tr>
            <tr>
              <td>Transaction fee</td>
              <td>Rs22.51</td>
            </tr>
            <tr>
              <td>lesson cancellation</td>
              <td>free</td>
            </tr>
            </table>
            <hr></hr>
            <tr>
              <td><h2>Total</h2></td>
              <td><h2>Rs3,000.80</h2></td>
            </tr>
            <input type="checkbox"></input> I want a free lesson or a refund if the tutior doesn't meet my needs
        </div>
        <div className='div2'>
        <nav>
        <ul>
          <Link href='/'><a className='personal red'>Personal Details</a></Link>
          <Link href='/payment'><a className='payment'>Payment Section</a></Link>
        </ul>
      </nav>
        </div>
      </div>
    </div>
  )
}
