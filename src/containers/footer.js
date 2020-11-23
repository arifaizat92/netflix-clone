import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link src="#">FAQ</Footer.Link>
                    <Footer.Link src="#">Investor Relations</Footer.Link>
                    <Footer.Link src="#">Ways to Watch</Footer.Link>
                    <Footer.Link src="#">Corporate Information</Footer.Link>
                    <Footer.Link src="#">Netflix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Help Center</Footer.Link>
                    <Footer.Link src="#">Jobs</Footer.Link>
                    <Footer.Link src="#">Terms of Use</Footer.Link>
                    <Footer.Link src="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Account</Footer.Link>
                    <Footer.Link src="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link src="#">Privacy</Footer.Link>
                    <Footer.Link src="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link src="#">Media Center</Footer.Link>
                    <Footer.Link src="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link src="#">Cookie Preferences</Footer.Link>
                    <Footer.Link src="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Malaysia</Footer.Text>
        </Footer>
    )
}
