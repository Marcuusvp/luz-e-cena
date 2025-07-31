import React from 'react'
import HeaderList from './components/HeaderList'
import HeaderListItem from './components/HeaderListItem'
import Logo from '../Logo'
import baner from '../../../public/LogoFavicon/Logo.png'
import HeaderLinks from './components/HeaderLinks'
import HeaderActions from './components/HeaderActions'
import HeaderFormFilters from './components/HeaderFormFilters'

const Header = () => {
  return (
    <header>
      <HeaderList>

        <HeaderListItem>
          <Logo src={baner}/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters/>
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions/>
        </HeaderListItem>
        
      </HeaderList>
    </header>
  )
}

export default Header