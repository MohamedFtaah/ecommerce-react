import React from 'react'
import { useState } from 'react'
import { Row } from 'react-bootstrap'
import SidefilterShearchHook from '../../hook/product/sidefilter-shearch-hook'

const SideFilter = () => {
  const [haightC, setHaightC] = useState('301px')
  const [haightB, setHaightB] = useState('301px')
  const [allCategoryData, allBrandData, clickCategory, clickBrand, priceTo, priceFrom] = SidefilterShearchHook()

  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2" style={{ maxHeight: haightC, overflow: 'hidden' }}>
          <div className="filter-title">الفئة</div>'
          <div className="d-flex mt-3">
            <input type="checkbox" value="0" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          <div>
            {allCategoryData.data?.length >= 1 ? (allCategoryData.data.map((item) => {
              return (<div key={item._id} className="d-flex mt-2">
                <input onClick={clickCategory} type="checkbox" value={item._id} />
                <div className="filter-sub me-2 ">{item.name} </div>
              </div>
              )
            })) : <h4>no data</h4>}
          </div>


        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => { haightC === '301px' ? setHaightC('100%') : setHaightC('301px') }}><i class="fa-solid fa-chevron-down"></i></div>
        <div className="d-flex flex-column mt-2" style={{ maxHeight: haightB, overflow: 'hidden' }}>
          <div className="filter-title mt-3">الماركة</div>
          <div className="d-flex mt-3">
            <input type="checkbox" value="" />
            <div className="filter-sub me-2 ">الكل</div>
          </div>
          {allBrandData.data?.length >= 1 ? allBrandData.data.map((item) => {
            return (<div key={item._id}
              className="d-flex mt-2">
              <input onChange={clickBrand} type="checkbox" value={item._id} />
              <div className="filter-sub me-2 ">{item.name}</div></div>)
          }) : <h4>no data</h4>}


        </div>
        <div style={{ cursor: 'pointer' }} onClick={() => { haightB === '301px' ? setHaightB('100%') : setHaightB('301px') }}><i class="fa-solid fa-chevron-down"></i></div>

        <div className="filter-title my-3">السعر</div>
        <div className="d-flex">
          <p className="filter-sub my-2">من:</p>
          <input
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">الي:</p>
          <input
            onChange={priceTo}

            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  )
}

export default SideFilter
