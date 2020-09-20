import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import './Search.css'
import {Button} from "@material-ui/core";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Search = ({hideButtons = false, searchTermPub}) => {
    const [input, setInput] = React.useState('')
    const history = useHistory()

    const search = e =>  {
        e.preventDefault()
        console.log('Go and search')
        searchTermPub(input)
        history.push('/search')
    }

    const handleChange = e => {
        setInput(e.target.value)
    }

    return (
        <div className={'search'}>
            <form onSubmit={search} className="search__input">
                <SearchIcon className={'search__inputIcon'} />
                <input value={input} onChange={handleChange} />
                <MicIcon onClick={search} />
            </form>
            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type={'submit'} onClick={search} >
                        Google Search
                    </Button>

                    <Button >
                        I'm Feeling Lucky
                    </Button>
                </div>
            ): (
                <div className="search__buttons ">
                    <Button className={'search__buttonHidden'} type={'submit'} onClick={search} >
                        Google Search
                    </Button>

                    <Button className={'search__buttonHidden'} >
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    }
}

export default connect(mapStateToProps,actions) (Search);