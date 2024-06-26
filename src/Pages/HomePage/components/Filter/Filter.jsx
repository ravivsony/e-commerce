import React, { useState, useRef, useEffect } from 'react'
import './Filter.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";


const Filter = ({ filters, filterItems, resetFilter, data, selectedOption, setSelectedOption }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [isDisabled, setisDisabled] = useState(true)
    const [selectedFilter, setSelectedFilter] = useState('')

    const ref = useRef()
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
        selectedOption.price && selectedOption.size && selectedOption.gender ? setisDisabled(false) : setisDisabled(true)
    }, [selectedOption.price, selectedOption.size, selectedOption.gender])

    const handleClick = (item) => {
        setIsClicked(true)
        setSelectedFilter(item.filter_name)
    }

    const handleListClick = (filter, option) => {
        if (filter == 'Select Price') {
            setSelectedOption({
                ...selectedOption,
                price: option
            });
        }
        if (filter == 'Select Size') {
            setSelectedOption({
                ...selectedOption,
                size: option
            });
        }
        if (filter == 'Select Gender') {
            setSelectedOption({
                ...selectedOption,
                gender: option
            });
        }
        if (filter == 'Select Color') {
            setSelectedOption({
                ...selectedOption,
                color: option
            });
        }
        setIsClicked(false)
    }
    return (
        <div className="filter-container">
            {filters && filters.map((item) => {
                return (
                    <div className='filter-box'>
                        <div>
                            <div className='filter-item' style={{ borderRadius: '4px', backgroundColor: '#fff', boxShadow: '0px 0px 4px rgb(0 0 0 / 15%)', border: 'none' }}>
                                <div style={{ display: 'flex', padding: '5px 10px 5px 5px', height: '3rem', alignItems: 'center' }}>
                                    <input
                                        id='dropdown-input'
                                        type='text'
                                        value={(item.filter_name == 'Select Price') ? selectedOption.price : (item.filter_name == 'Select Size') ? selectedOption.size : (item.filter_name == 'Select Gender') ? selectedOption.gender : selectedOption.color}
                                        style={{ fontWeight: '500', letterSpacing: '.14px', textAlign: 'left', border: 'none', margin: 0, textTransform: 'uppercase' }}
                                        readOnly
                                        onClick={() => handleClick(item)}
                                        placeholder={item.filter_name} />
                                    {isClicked && selectedFilter === item.filter_name ? <FaAngleUp /> : <FaAngleDown />}
                                    {isClicked && (selectedFilter === item.filter_name) ? <ul ref={ref} id='options' style={selectedFilter === 'Select Size' || selectedFilter === 'Select Color' ? { margin: '306px 0px 0px -5px' } : selectedFilter === 'Select Gender' ? { margin: '145px 0px 0px -5px' } : { margin: '264px 0px 0px -5px' }}>
                                        {item.options && item.options.map((option) => {
                                            return (<li className='list-style' id={item.options && item.options.length} onClick={() => handleListClick(selectedFilter, option)}>{option}</li>)
                                        })
                                        }</ul> : <React.Fragment></React.Fragment>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            {/* {data && data.length > 20 && !isClicked ?  */}
            <button disabled={isDisabled} style={isDisabled ? { opacity: 0.7 } : { opacity: 1 }} className='filter-btn' onClick={() => filterItems(selectedOption)}>Filter</button>
            {/* : <button className='filter-btn' onClick={() => resetFilter()}>Reset</button>} */}
        </div>
    )
}

export default Filter