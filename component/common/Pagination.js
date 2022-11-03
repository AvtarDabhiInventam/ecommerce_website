import React from 'react'
import style from '../../styles/components/pagination.module.scss'


const Pagination = () => {
  return (
    <div>
        <nav className={`${style.paging_navigation} pd-t-45`}>
            <ul className={`${style.nav_links}`}>
                <li className={`${style.nav_previous}`}>
                    <a href="#">Previous</a>
                </li>
                <li><a href="#">1</a></li>
                <li className={`${style.active}`}><a href="#" className={`${style.page_numbers}`}>2</a></li>
                <li><a href="#" className={`${style.page_numbers}`}>3</a></li>
                <li><a href="#" className={`${style.page_numbers}`}>4</a></li>
                <li className={`${style.nav_next}`}>
                    <a href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Pagination