import React from 'react'


const myimg='https://media.istockphoto.com/id/1169235498/photo/happy-woman-thinking-at-breakfast-on-vacation-stock-photo.jpg?s=2048x2048&w=is&k=20&c=j24S0xCCQiippPW6cqIS5asBiE3l2_wUj78jPJNCbhY='
const Card = () => {
  return (
    <div className='card'>
      <img src={myimg} alt="" />
      <h3>news</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni nam iusto repellat numquam quibusdam quas labore delectus, consectetur perspiciatis est accusantium amet molestiae odit et culpa quaerat dolorum eveniet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora quis repellendus. Suscipit natus magnam itaque aut. Saepe aspernatur, maiores consequatur unde magnam porro sit tenetur dignissimos voluptatem nostrum rerum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo explicabo tempora quod, delectus hic, quia maiores dolorem omnis, fuga inventore quo commodi animi aliquid voluptate enim necessitatibus numquam autem!
      </p>
    </div>
  )
}

export default Card
