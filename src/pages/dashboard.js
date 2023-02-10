import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const dashboard = (props) => {
const history = useRouter()
    useEffect(() => {
        !props?.currentUser?.email && history.push('/')
    },[])

  return (
      <div>
      {props?.currentUser?.email ?
        <Grid container spacing={1} sx={{marginTop: '3%'}}>
            <Grid item md={5}></Grid>
            <Grid item xs={12} md={2}>Email: {props?.currentUser?.email}</Grid>
            <Grid item md={5}></Grid>
            <Grid item md={5}></Grid>
            <Grid item xs={12} md={2}>First Name: {props?.currentUser?.firstName}</Grid>
            <Grid item md={5}></Grid>
            <Grid item md={5}></Grid>
            <Grid item xs={12} md={2}>Last Name: {props?.currentUser?.lastName}</Grid>
            <Grid item md={5}></Grid>
        </Grid>
        : 'You Are Not Logged In'
    }
        </div>
  )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps)(dashboard)