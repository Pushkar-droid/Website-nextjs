import Head from 'next/head'
import Navbar from "../Components/Nav"
import Image from "next/image"
import Link from "next/Link"
function payment() {
  return (
    <div>
      <Head>
        <title>payment</title>
      </Head>
        <Navbar />
      <div className='main'>
      <div className='div1'>
          <h2>ORDER SUMMARY<span className='edit'>Edit</span></h2>
          <hr></hr>
          <div>
            <Image className='img1' src="/boy.jpg" height="120" width="100px"></Image>
            <div className='item'>
              ELLA.H <Image className='img2' src="/check.jpg" height="20px" width="20px"></Image> <Image className='img2' src="/flag.jpg" height="20px" width="20px"></Image><br />
              <Image className='img2' src="/scholar1.jpg" height="20" width="20px"></Image>English
            </div>
          </div>
          <hr></hr>
          <p>Date and Time</p>
          <h2>Friday,February 4,18:30</h2>
          <p>GMT + 5:30</p>
          <hr></hr>
          <h3>Apply Coupon<span><input className='coupon' type="text"></input></span></h3>
          <hr />
          <table>
            <tbody>
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
            </tbody>
            </table>
            <hr></hr>
            <table>
              <tbody>
            <tr>
              <td><h2>Total</h2></td>
              <td><h2>Rs3,000.80</h2></td>
            </tr>
            </tbody>
            </table>
            <input type="checkbox"></input> I want a free lesson or a refund if the tutior doesn't meet my needs
        </div>

        {/* <---------------------------------------------------------------------------------------------------------------------> */}

        <div className='div2'>
          <nav className='nav4'>
            <ul>
              <Link href='/'><a className='personal'>Personal Details</a></Link>
              <Link href='/payment'><a className='payment red'>Payment Section</a></Link>
            </ul>
          </nav>
          <h2>PAYMENT SECTION</h2>
          <h3>SAVED CARDS<span className='edit'>Edit</span></h3>
          <Image src="/card.png" height="180" width="310px"></Image>
          <Image src="/images1.jpg" height="180" width="310px"></Image>
          <p className='text1'>Other Payment Methods</p>
          <span><button className='but5 but6'>Credit/Debit Card</button><button className='but5'>Net Banking</button><button className='but5'>UPI</button></span><br /><br /><br />
          <table><tbody className='tbody1'>
            <tr>
              <td><p className='text1'>Card Number</p> <br></br><input className='input1' type="text" placeholder='0000 0000 0000 0000'></input></td>
              <td className='td3'><p className='text1'>Name On Card</p> <br></br> <input className='input3' type="text" placeholder='ENTER YOUR NAME'></input></td>
            </tr>
            </tbody></table><br /><br />
            <table><tbody className='tbody1'>
            <tr>
              <td>
                <p className='text1'>Expiry Date</p><br /><input className='input2' type="text" placeholder='MM/YY'></input></td>
              <td className='td3'>
                <p className='text1'>CVV</p> <br /><input className='input2' type="text" placeholder='---'></input>
              </td>
            </tr>
            </tbody>
          </table><br /><br /><br /><br />
          <hr />
          <Link href="/"><a className='back'><Image className='img2' src="/left.jpg" height="10" width="10px"></Image>Back to Personal Details</a></Link>
          <button className='but2 right1'>MAKE PAYMENT</button>
        </div>
        </div>
    </div>
  )
}

export default payment;