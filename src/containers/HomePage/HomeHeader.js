import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/Logo.webp';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { changelanguageApp } from '../../store/actions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        // alert(language);
        // fire redux event : actions
        this.props.changelanguageAppRedux(language);
    }

    render() {

        const { intl } = this.props;
        let language = this.props.language;

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'>
                                <a href="#">
                                    <img src={logo} alt="Logo" />
                                </a>
                            </div>
                        </div>

                        <div className='center-content'>
                            <div className='content-bar'>
                                <div className='child-content'>
                                    <div>
                                        <b> <FormattedMessage id="homeheader.tag-all" /></b>
                                    </div>
                                </div>

                                <div className='child-content'>
                                    <div>
                                        <b><FormattedMessage id="homeheader.tag-home" /></b>
                                    </div>
                                </div>

                                <div className='child-content'>
                                    <div>
                                        <b><FormattedMessage id="homeheader.tag-hospital" /></b>
                                    </div>
                                </div>

                                <div className='child-content'>
                                    <div>
                                        <b> <FormattedMessage id="homeheader.tag-healthy" /></b>
                                    </div>
                                </div>
                            </div>

                            <div className='search-bar'>
                                <input type="text" className="search-input"
                                    placeholder={intl.formatMessage({ id: "homeheader.search" })}>
                                </input>
                                <i className="fas fa-search"></i>
                            </div>
                        </div>

                        <div className='right-content'>
                            <div className='cooperation'>
                                <i className="far fa-handshake"></i>
                                <p> <FormattedMessage id="homeheader.cooperation" /></p>
                            </div>

                            <div className='schedule'>
                                <i className="far fa-clock"></i>
                                <p> <FormattedMessage id="homeheader.appointment" /></p>
                            </div>
                            <div className='set-language'>
                                <div className={language === LANGUAGES.VI ? 'flag-language-vi active' : 'flag-language-vi'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span>
                                </div>

                                <div className={language === LANGUAGES.EN ? 'flag-language-en active' : 'flag-language-en'}>
                                    <span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className="introduce-section">

                        <h2> <FormattedMessage id="banner.title1"></FormattedMessage></h2>
                        <h2><FormattedMessage id="banner.title2"></FormattedMessage></h2>

                        <div className='Search-Recommend'>
                            <div className='Search-Area'>
                                <input type="text" className="search-input"
                                    placeholder={intl.formatMessage({ id: "banner.search" })}>
                                </input>
                                <i className="fas fa-paper-plane"></i>
                            </div>

                            <div className='Recommend-Area'>
                                <i className="fas fa-hospital"></i>
                                <FormattedMessage id="banner.findHospital"></FormattedMessage>
                            </div>

                        </div>
                    </div>
                    <div className='linear-gra-background'>

                    </div>

                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changelanguageAppRedux: (language) => dispatch(changelanguageApp(language))
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
