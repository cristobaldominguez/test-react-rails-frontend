import { NavLink, useNavigate } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { userLocalStorageKey } from '../../config.js'
import useServer from '../../hooks/useServer.js'
import useAuth from '../../hooks/useAuth.js'
import { apiUrl } from '../../config.js'
import css from './styles.module.css'

function Navigation() {
  const { user, setUser, isAuthenticated } = useAuth()
  const { delete: destroy } = useServer()
  const navigate = useNavigate()

  const userProfile = user ? `${apiUrl}/${user.avatar_url}` : null

  const logoutHandler = async () => {
    const { body } = await destroy({ url: '/logout' })
    if (!body.status.code === 200) return
    
    navigate('/')
    window.localStorage.removeItem(userLocalStorageKey)
    return setUser(null)
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/"><img alt="Your Company" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" /></NavLink>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {!isAuthenticated && (<NavLink to="/registration" className={({ isActive }) => isActive ? `${css.desktop_menu} ${css.active}` : `${css.desktop_menu} ${css.default}` }> Register</NavLink>)}
              {!isAuthenticated && (<NavLink to="/login" className={({ isActive }) => isActive ? `${css.desktop_menu} ${css.active}` : `${css.desktop_menu} ${css.default}` }> Login</NavLink>)}
              <NavLink to="/#" className={({ isActive }) => isActive ? `${css.desktop_menu} ${css.active}` : `${css.desktop_menu} ${css.default}` }> Posts</NavLink>
              <NavLink to="/#" className={({ isActive }) => isActive ? `${css.desktop_menu} ${css.active}` : `${css.desktop_menu} ${css.default}` }> Calendar</NavLink>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only"> Search </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </div>
                <input id="search" name="search" type="search" placeholder="Search" className={css.desktop_menu_search} />
              </div>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          {isAuthenticated && (
          <div className="hidden lg:ml-4 lg:flex lg:items-center">
            <button type="button" className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 flex-shrink-0">
              <div>
                <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img alt="" src={userProfile} className="h-8 w-8 rounded-full" />
                </MenuButton>
              </div>
              <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <MenuItem><a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"> Your Profile </a></MenuItem>
                <MenuItem><a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"> Settings </a></MenuItem>
                <MenuItem><a href="#" onClick={logoutHandler} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"> Sign out </a></MenuItem>
              </MenuItems>
            </Menu>
          </div>
          )}
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 pb-3 pt-2">
        {!isAuthenticated && (<NavLink to="/registration" className={({ isActive }) => isActive ? `${css.mobile_menu} ${css.active}` : `${css.mobile_menu} ${css.default}` }> Register </NavLink>)}
        {!isAuthenticated && (<NavLink to="/login" className={({ isActive }) => isActive ? `${css.mobile_menu} ${css.active}` : `${css.mobile_menu} ${css.default}` }> Login </NavLink>)}
        <NavLink to="/#" className={({ isActive }) => isActive ? `${css.mobile_menu} ${css.active}` : `${css.mobile_menu} ${css.default}` }> Posts </NavLink>
        <NavLink to="/#" className={({ isActive }) => isActive ? `${css.mobile_menu} ${css.active}` : `${css.mobile_menu} ${css.default}` }> Calendar </NavLink>
        </div>
        {isAuthenticated && (
        <div className="border-t border-gray-200 pb-3 pt-4">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img alt="" src={userProfile} className="h-10 w-10 rounded-full" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Tom Cook</div>
              <div className="text-sm font-medium text-gray-500">tom@example.com</div>
            </div>
            <button type="button" className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <NavLink to="/a" className={css.profile_drop_down}> Your Profile </NavLink>
            <NavLink to="/a" className={css.profile_drop_down}> Settings </NavLink>
            <NavLink to="/a" onClick={logoutHandler} className={css.profile_drop_down}> Sign out </NavLink>
          </div>
        </div>
        )}
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navigation
