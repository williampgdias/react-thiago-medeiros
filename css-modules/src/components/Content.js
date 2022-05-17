

import style from './Content.module.css';

const Content = () => {
  return(
    <div className={ style.content }>
      <h2>Title</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      </p>
      <button className={ style.btn }>Test Button 2</button>
    </div>
  )
}

export default Content;