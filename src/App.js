import React, { Component } from 'react';
import './Fontfaces.css'
import './App.css';
import './Event.scss';
import Event from './Event.js';
import Timeline from './Timeline'
import Navbar from './Navbar'

let position = 0;
let eventArray = [];
let event1;

class DownArrow extends Component {

    handleClick() {
        let allcontain = document.getElementById('allcontain');
        if (position < (1)) {
            position++;
            let current = allcontain.style.transform;
            let pos = parseInt(current.match(/-?[0-9]+/));
            if (window.innerWidth > 992) pos -= 60;
            else pos -= 46;
            allcontain.style.transform = "translateY(" + pos + "vh)";
        }
        eventArray = document.getElementsByClassName('contained');
        for (let i = 0; i < eventArray.length; i++) {
            event1 = eventArray[i];
            event1.style.transform = "translateX(0vw)";
            let a = document.getElementById(event1.id + "left");
            a.style.opacity = '0.33';
        }
        window.pos = 0;
        this.props.updateActive();
    }

    render() {
        return (
            <div className={'downArrow'} onClick={this.handleClick.bind(this)}>
                <img className={'downArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'}
                    style={{ transform: 'rotate(180deg)' }} />
            </div>)
    }
}

class UpArrow extends Component {

    handleClick() {
        let allcontain = document.getElementById('allcontain');
        if (position > 0) {
            position--;
            let current = allcontain.style.transform;
            let pos = parseInt(current.match(/-?[0-9]+/));
            if (window.innerWidth > 992) pos += 60;
            else pos += 46;
            allcontain.style.transform = "translateY(" + pos + "vh)";
        }
        eventArray = document.getElementsByClassName('contained');
        for (let i = 0; i < eventArray.length; i++) {
            event1 = eventArray[i];
            event1.style.transform = "translateX(0vw)";
        }
        window.pos = 0;
        this.props.updateActive();
    }

    render() {
        return (
            <div className={'upArrow'} onClick={this.handleClick.bind(this)} style={{ opacity: '0.33' }}>
                <img className={'upArrowArrow'} src={'https://cloudfront-us-east-1.images.arcpublishing.com/spectator/3HEVEYZCMZEYJPCHS3U44TLXGY.png'} />
            </div>
        )
    }
}

const excludeYears = new Set([]);

class App extends Component {
    constructor() {
        super();
        this.state = { activeItem: 0 }
        this.incrementActiveItem = this.incrementActiveItem.bind(this)
        this.decrementActiveItem = this.decrementActiveItem.bind(this)
        this.setActiveItem = this.setActiveItem.bind(this)
    }

    incrementActiveItem() {
        let i = this.state.activeItem + 1;
        if (i === 1) {
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
        }
        if (i > 1) {
            let a = document.getElementsByClassName("downArrow")[0];
            a.style.opacity = 0.33;
            return;
        }
        while (excludeYears.has(i + 2015) && i <= 4) {
            i++;
        }
        let a = document.getElementsByClassName("upArrow")[0];
        a.style.opacity = 1;
        this.setState({ activeItem: i })
    }

    decrementActiveItem() {
        let i = this.state.activeItem - 1;
        if (i === 0) {
            let a = document.getElementsByClassName("upArrow")[0];
            a.style.opacity = 0.33;
        }
        if (i < 0) {
            return;
        }
        while (excludeYears.has(i + 2016)) {
            i--;
        }
        let a = document.getElementsByClassName("downArrow")[0];
        a.style.opacity = 1;
        this.setState({ activeItem: i })
    }

    setActiveItem(i) {
        this.setState({ activeItem: i })
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <div className={"maintitle"}>
                    <div className={'opinion'}>
                        OPINION ARCHIVE
                    </div>
                    <div className={'pagetitle'}>
                        How Israel, Palestine, and BDS cemented itself in student debate at Columbia
                    </div>
                    <div className={'credits'}>
                        <p>Illustration by Brenda Huang</p>
                        <p>Engineering by McKenna Gillard and Hong Sen Du</p>
                    </div>
                    {/* <img className={'thepath'} src={'https://catfish.columbiaspectator.com/videos/ThePath.svg'} style={{opacity:0.0}}/> */}
                    <div className={'letter'}>
                        LETTER FROM THE EDITOR:
                    </div>
                    <div className="letter-content">
                        <p>Dear readers,</p><p>

                            Last November, the Columbia College Student Council voted to place a question on its next ballot after a tumultuous four-year saga where the vote failed to pass twice. The question reads: </p>
                        <div className={'center'}>
                            Should Columbia University divest its stocks, funds, and endowment from companies that profit from or engage in the State of Israel’s acts toward Palestinians that, according to Columbia University Apartheid Divest (CUAD), fall under the United Nations International Convention of the Suppression and Punishment of the Crime of Apartheid?
                        </div>
                        <p>

                            After months of delay due to COVID-19, Columbia College students are now scheduled to vote on this question between September 22 and September 25, 2020.

                            The Boycott, Divest, and Sanction movement advocates for colleges and universities to divest their endowments from companies that the movement claims profit off of Israeli aggression toward Palestine. As a member of the Columbia community, I know how contentious the topics of BDS, Palestine, and Israel can be on campus. Hopefully, this digital platform and the review of our predecessors' arguments will enable us to better engage in the critical inquiry of each side of the debate.

                            On behalf of myself and the editorial team, I urge you to read critically and consciously reexamine your own beliefs and positions if you are introduced to new perspectives within this scope.

                            Lastly, I would impress upon you that we strove to curate and edit these pieces devoid of any personal biases.
                            </p><p>

                            Warmly,</p><p>
                            Ryan Oden</p><p>
                            Administrative Deputy Editorial Page Editor</p>
                    </div>
                    <div className="timeline-title">
                        EXPLORE PIECES
                    </div>
                </div>
                <UpArrow updateActive={this.decrementActiveItem} />
                <Timeline excludeYears={excludeYears} activeItem={this.state.activeItem} setActiveItem={this.setActiveItem} />
                <div className={'allcontainer'}>
                    <div className={'allcontain'} id={'allcontain'} style={{ transform: 'translateY(0)' }}>
                        <Event year={"Pro Israel"}
                            opeds={
                                [
                                    [
                                        "BDS is a perversion of Columbia's investments",
                                        "September 23, 2020",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NMUXKKL5BBCAZPMSU7YSSSJWU4.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2020/09/23/bds-is-a-perversion-of-columbias-investments/",
                                        "Using financial pressure to achieve the political goal of ridding the region of a Jewish state is not advocacy. It is economic warfare."
                                    ],
                                    [
                                        "I am a pro-Israel former Aryeh board member, and I am embarrassed by CCSC’s vote",
                                        "March 11, 2019",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/QEQB46ZJJRH5PKU7ZV3ZONZE3E.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2019/03/12/i-am-a-pro-israel-former-aryeh-board-member-and-i-am-embarrassed-by-ccscs-vote/",
                                        "I used to feel safe, trusting that even if members of the council would feel comfortable privately voting to alienate the majority of Jewish students, they would not do so publicly. Now that CCSC has used a secret ballot, I can no longer feel safe."
                                    ],
                                    [
                                        "Reject BDS and keep Barnard an inclusive environment",
                                        "April 11, 2018",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/7M7KZURRRVH5RFIM5WPF66J4CI.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2018/04/11/reject-bds-and-keep-barnard-an-inclusive-environment/",
                                        "If BDS were to pass on our campus, Barnard would become a less inclusive and safe environment for Jewish students, regardless of whether or not they identify as Zionists. ... If BDS were to pass, even symbolically, while the repercussions may not impact non-Jewish students, they certainly would impact the 33 percent Jewish Barnard student body who could become the targets of an increase in anti-Semitic acts."
                                    ],
                                    [
                                        "If you support peace, don't support BDS",
                                        "April 24, 2017",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/MV54BEX6VRGCTOBKMBRLOFOFTA",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2017/04/24/if-you-support-peace-dont-support-bds/",
                                        "So while CUAD members claim that the BDS movement is “focused on securing equal rights” and not “demonizing Israel,” the movement they have embraced seeks to end the Jewish right to self-determination, specifically by demonizing Israel. The movement’s warped version of justice precludes the possibility of a solution that satisfies the needs of both Israelis and Palestinians."
                                    ],
                                    [
                                        "Israel and Palestine on campus: Where do we go from here?",
                                        "December 9, 2016",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/SOICTUC3INBCLBGTVUV5GUHHIQ",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2016/12/08/israel-and-palestine-campus-where-do-we-go-here/",
                                        "Pro-Palestinian activists speak of justice, pro-Israel activists of peace; neither will be achieved without compromises from both peoples. Thus to attain both goals, there must be a basic point of agreement, a starting line from which we can both proceed."
                                    ],
                                    [
                                        "A beginner's guide to Israel Apartheid Week",
                                        "March 22, 2014",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/2010/03/07/beginners-guide-israel-apartheid-week/",
                                        "[T]he apartheid label is not compatible with the desire for a two-state solution, but rather with the destruction of the Jewish State of Israel, and the creation of a single state in the territory formerly composing the British Mandate of Palestine."
                                    ],
                                    [
                                        "No More Israel?",
                                        "March 27, 2013",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/2002/11/12/no-more-israel/",
                                        "It's time we admit it: if Israel were to suddenly withdraw from the West Bank and Gaza, or, to take it further, if Israel were to disappear altogether, it wouldn't do any good for the Palestinian people in particular or the Arab people in general."
                                    ]
                                ]
                            }
                        />
                        <Event year={"Pro Palestine"}
                            opeds={
                                [
                                    [
                                        "Stand for justice, stand for Palestine",
                                        "September 23, 2020",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/TNU44YY7UFHWPMLCPU4HUL2HAE.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2020/09/23/stand-for-justice-stand-for-palestine/",
                                        "The investments an institution or corporation holds largely reflects the environment and social fabric that is being cultivated in the shared space it produces."
                                    ],
                                    [
                                        "A Jewish argument for divestment",
                                        "September 23, 2020",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/NAQMI6XFCVAAFPQPM46QPGP3GU",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2020/09/23/a-jewish-argument-for-divestment/",
                                        "To stand in solidarity with the boycott, divestment, and sanctions movement is to stand in solidarity with Palestinians."
                                    ],
                                    [
                                        "Bold, beautiful, BDS: The moral case for saying “Yes to Divest”",
                                        "April 13, 2018",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/LT3G7FEXXJGS5OO62DQMSUTJNY.jpg",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2018/04/13/bold-beautiful-bds-the-moral-case-for-saying-yes-to-divest/",
                                        "The task of creating a socially-conscious college falls to the students who give their campus form and life during their time at Barnard. Divestment, if we understand it from the standpoint of the oppressed, represents the first step in the path towards justice."
                                    ],
                                    [
                                        "When it comes to Israel Week, nothing is apolitical",
                                        "November 18, 2015",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/72XPJQPHVFFD7FUZTBJMQDI5MQ",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2015/11/18/when-it-comes-israel-week-nothing-apolitical/",
                                        "Aryeh attempts to present an image of Israel beyond the conflict by highlighting elements of Israeli society that are seemingly unrelated to Palestine. Such events don't present an image of Israel beyond the conflict, but rather an image of Israel without one."
                                    ],
                                    [
                                        "Israel practices apartheid ",
                                        "March 22, 2014",
                                        "https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/PBHJIT6R2VGCRFNJ3RHFBFUC6A",
                                        [],
                                        "https://www.columbiaspectator.com/2011/02/27/israel-practices-apartheid/",
                                        "Israel is an apartheid state according to legal definition, but it doesn't take legal expertise of international law to understand that what is happening to the Palestinians is anything but apartheid­—it just takes a simple examination of the situation. "
                                    ],
                                    [
                                        "Soft Snow on Israel",
                                        "March 27, 2013",
                                        "https://cloudfront-us-east-1.images.arcpublishing.com/spectator/SHMEGXTRTNDX3KFT3HUYS75ROI",
                                        [],
                                        "https://www.columbiaspectator.com/opinion/2017/02/17/columbia-you-owe-harlem-big-time/",
                                        'The attraction of using "neighborhood" is that it personalizes the inhabitants. If writers use "neighborhood," then the immediate question is, "Why are Palestinians attacking Jewish neighborhoods?" Or even, "Why should the Israeli military have to defend a Jewish neighborhood?"'
                                    ]
                                ]
                            }
                        />
                    </div>
                </div>
                <DownArrow updateActive={this.incrementActiveItem} />
            </div>
        );
    }
}

export default App;
