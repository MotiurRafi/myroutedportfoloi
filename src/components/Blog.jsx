import React from 'react'

export default function Blog() {
  return (
    <div className='blogSection'>
      <div className="blogheading">Blog</div>
      <div className="blogcontent">
        <div className="leftSection">
            <div className="blogItems">
                <div className="blogItem">
                    <div className="imgbox">
                        <img src="/postPic1.jpg" alt="" />
                        <div className="datebox">
                            <h4>15</h4>
                            <h5>jan</h5>
                        </div>
                    </div>
                    <div className="detailbox">
                        <a href="/" className="detailheading">Lorem ipsum dolor sit amet consectetur</a>
                        <p className='detailpassage'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur voluptates, dolore quibusdam illo earum totam?</p>
                        <div className="lifestyleandcomments">
                            <div className="lifestyle">
                                <i className="bx bxs-user"></i>
                                <h5>Travel, Lifestyle</h5>
                            </div>
                            <div className="comments">
                                <i className="bx bxs-chat"></i>
                                <h5>03 Comments</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blogItem">
                    <div className="imgbox">
                        <img src="/postPic2.jpg" alt="" />
                        <div className="datebox">
                            <h4>15</h4>
                            <h5>jan</h5>
                        </div>
                    </div>
                    <div className="detailbox">
                        <a href="/" className="detailheading">Lorem ipsum dolor sit amet consectetur</a>
                        <p className='detailpassage'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur voluptates, dolore quibusdam illo earum totam?</p>
                        <div className="lifestyleandcomments">
                            <div className="lifestyle">
                                <i className="bx bxs-user"></i>
                                <h5>Travel, Lifestyle</h5>
                            </div>
                            <div className="comments">
                                <i className="bx bxs-chat"></i>
                                <h5>03 Comments</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blogItem">
                    <div className="imgbox">
                        <img src="/postPic3.jpg" alt="" />
                        <div className="datebox">
                            <h4>15</h4>
                            <h5>jan</h5>
                        </div>
                    </div>
                    <div className="detailbox">
                        <a href="/" className="detailheading">Lorem ipsum dolor sit amet consectetur</a>
                        <p className='detailpassage'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur voluptates, dolore quibusdam illo earum totam?</p>
                        <div className="lifestyleandcomments">
                            <div className="lifestyle">
                                <i className="bx bxs-user"></i>
                                <h5>Travel, Lifestyle</h5>
                            </div>
                            <div className="comments">
                                <i className="bx bxs-chat"></i>
                                <h5>03 Comments</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prevnext"></div>
        </div>
        <div className="rightSection">
            <div className="searchbox">
                <form action="">
                    <div className="search">
                        <input type="text" placeholder='Search Keyword' />
                        <i class='bx bx-search'></i>
                   </div>
                    <button type='submit' className='topbutton'><span>SEARCH</span></button>
                </form>
            </div>
            <div className="categorybox">
                <h4>Category</h4>
                <div className="categorylist">
                    <a href="/">Restaurent(23)</a>
                    <a href="/">Travel news(10)</a>
                    <a href="/">Modern technolory(34)</a>
                    <a href="/">Product(21)</a>
                    <a href="/">Inspiration(4)</a>
                    <a href="/">Health care(03)</a>
                    <a href="/" style={{border:"none"}}>Restaurent(4)</a>
                </div>
            </div>
            <div className="recpostbox">
                <h4>Recent Post</h4>
                <div className="posts">
                    <div className="post">
                        <div className="imgbox">
                            <img src="/recentpost1.jpg" alt="" />
                        </div>
                        <div className="postdetail">
                            <a href="/">This is a heading</a>
                            <div className="posttime">January 12,2023</div>
                        </div>
                    </div>
                    <div className="post">
                        <div className="imgbox">
                            <img src="/recentpost2.jpg" alt="" />
                        </div>
                        <div className="postdetail">
                            <a href="/">This is a heading</a>
                            <div className="posttime">2 hours ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tagbox">
                <h4>Tag Clouds</h4>
                <div className="tagbuttons">
                    <button>project</button>
                    <button>love</button>
                    <button>technology</button>
                    <button>travel</button>
                    <button>restaurent</button>
                    <button>life style</button>
                    <button>design</button>
                    <button>illustration</button>
                </div>
            </div>
            <div className="instafeedbox">
                <h4>Instagram Feeds</h4>
                <div className="instaimages">
                    <a href="/"><img src="/instafeed1.jpg" alt="" /></a>
                    <a href="/"><img src="/instafeed2.jpg" alt="" /></a>
                    <a href="/"><img src="/instafeed3.jpg" alt="" /></a>
                    <a href="/"><img src="/instafeed4.jpg" alt="" /></a>
                    <a href="/"><img src="/instafeed5.jpg" alt="" /></a>
                    <a href="/"><img src="/instafeed6.jpg" alt="" /></a>
                </div>
            </div>
            <div className="newsbletterox">
                <h4>Newsletter</h4>
                <div className="newsinput">
                    <form action="">
                        <input type="text" placeholder='Enter email' name=''/>
                        <button type='submit'className='topbutton' ><span>SUBSCRIBE</span></button>                        
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
