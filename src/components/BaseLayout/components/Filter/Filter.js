import React,{useState,useRef,useEffect} from 'react'
import './Filter.css'

const Filter = ({filters,filterItems,resetFilter,data}) => {
    const[isClicked,setIsClicked]=useState(false)
    const[selectedFilter,setSelectedFilter]=useState('')
    const[selectedOption,setSelectedOption]=useState('')
    const[filterFor,setFilterFor]=useState([])
    const[isDisabled,setisDisabled]=useState(true)

    const ref= useRef()
useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsClicked(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
}, [ref])

useEffect(() => {
    filterFor &&  filterFor.length>2?setisDisabled(false):setisDisabled(true)
}, [filterFor.length])

useEffect(() => {
    setFilterFor([])
    setSelectedOption('')
}, [data.length])

const handleClick=(item)=>{
    setIsClicked(true)
    setSelectedFilter(item.filter_name)
}

const handleListClick=(option)=>{
    setSelectedOption(option)
    setIsClicked(false)
    setFilterFor([...filterFor,option])
}
  return (
    <div className="filter-container">
    {filters && filters.map((item)=>{
        return( 
            <div className='filter-box'>
                <div>
                    <div className='filter-item' style={{borderRadius: '4px',backgroundColor: '#fff',boxShadow: '0px 0px 4px rgb(0 0 0 / 15%)',border: 'none'}}>
                        <div style={{display:'flex',padding: '5px 10px 5px 5px',height: '3rem',alignItems: 'center'}}>
                            <input id='dropdown-input' type='text' value={item.options && item.options.includes(selectedOption)? selectedOption:undefined} style={{fontWeight:'500',letterSpacing: '.14px',textAlign: 'left',border: 'none',margin: 0,textTransform: 'uppercase'}} readOnly onClick={()=>handleClick(item)}  placeholder={item.filter_name}/>
                            <img style={{width:'9px',height:'9px'}} src="https://gomechanic.in/spares/icons/ic_expand_more.svg" alt="" srcset="" />
                            {isClicked && (selectedFilter===item.filter_name)?<ul ref={ref} id='options' style={selectedFilter==='Select Size' || selectedFilter==='Select Color'?{margin:'306px 0px 0px -5px'}:selectedFilter==='Select Gender'?{margin:'145px 0px 0px -5px'}:{margin: '264px 0px 0px -5px'}}>
                            {item.options && item.options.map((option)=>{
                               return(<li className='list-style'  id={item.options && item.options.length} onClick={()=>handleListClick(option)}>{option}</li>)})
                            }</ul>:<React.Fragment></React.Fragment>}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    }
    {data && data.length>20?<button disabled={isDisabled} style={isDisabled?{opacity:0.7}:{opacity:1}} className='filter-btn' onClick={()=>filterItems(filterFor)}>Filter</button>:<button className='filter-btn' onClick={()=>resetFilter()}>Reset</button>}
    </div>
  )
}

export default Filter