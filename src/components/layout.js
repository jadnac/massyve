import PropTypes from 'prop-types'

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default function Layout({children}){
    return (
        <div>
    {children}
        </div>
    )
}