import Image from 'next/image'
import Head from 'next/Head'


function Navbar() {
  return (
    <nav>
      <Head>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
        <ul  className='nav'>
          <div>
            <li className='li left'><Image src="/logo.png" height = "70px" width='100px
            '/></li>
          </div>        
          <div className='part'>
            <li className='li right'><input className='read nav4' type="text" placeholder='SEARCH A SKILL'></input></li>
            <li className='li right'>
              <Image src="/network.png" height="20" width="20px"></Image>
            </li>
            <li className='li right nav4'><a href="">Log In</a></li>
            <li className='li right'><button className='but2'><strong>Sign In</strong></button></li>
          </div>
        </ul>
    </nav>
  )
}

export default Navbar;