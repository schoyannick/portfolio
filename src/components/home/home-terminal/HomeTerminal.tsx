import React from 'react';
import { VscChromeMinimize, VscChromeMaximize, VscClose } from 'react-icons/vsc';

import { StyledCodeBlue, StyledCodeGreen, StyledCodeGreenATag, StyledCodeOrange, StyledCodePurple, StyledHiddenMedia, StyledHomeTerminalBody, StyledHomeTerminalHeader, StyledHomeTerminalHeaderIconWrapper, StyledHomeTerminalWrapper, StyledTab } from './StyledHomeTerminal';

const HomeTerminal: React.FC = () => (
    <StyledHomeTerminalWrapper>
        <StyledHomeTerminalHeader>
            <StyledHomeTerminalHeaderIconWrapper>
                <VscChromeMinimize
                    size={30}
                    style={{
                        marginRight: '5px',
                    }}
                />
                <VscChromeMaximize
                    size={30}
                    style={{
                        marginRight: '5px',
                    }}
                />
                <VscClose
                    size={30}
                    style={{
                        marginRight: '3px',
                    }}
                />
            </StyledHomeTerminalHeaderIconWrapper>
        </StyledHomeTerminalHeader>

        <StyledHomeTerminalBody>
            <div>
                <StyledCodePurple>const</StyledCodePurple>&nbsp;
                <StyledCodeBlue>me</StyledCodeBlue>
                &nbsp;= &#123;
            </div>

            <StyledTab>
                <StyledCodePurple>name</StyledCodePurple>:&nbsp;
                <StyledCodeGreen>&apos;Yannick&apos;</StyledCodeGreen>,
            </StyledTab>

            <StyledTab>
                <StyledCodePurple>age</StyledCodePurple>:&nbsp;
                <StyledCodeBlue>25</StyledCodeBlue>,
            </StyledTab>

            <StyledTab>
                <StyledCodePurple>role</StyledCodePurple>:&nbsp;
                <StyledCodeGreen>&apos;Web Developer&apos;</StyledCodeGreen>,
            </StyledTab>

            <StyledHiddenMedia>
                <StyledTab>
                    <StyledCodePurple>github</StyledCodePurple>:&nbsp;
                    <StyledCodeGreen>&apos;
                        <StyledCodeGreenATag
                            target="_blank" 
                            href="https://github.com/schoyannick"
                            rel="noreferrer">
                            https://github.com/schoyannick
                        </StyledCodeGreenATag>&apos;
                    </StyledCodeGreen>,
                </StyledTab>
            </StyledHiddenMedia>
            
            <StyledTab><StyledCodePurple>langs</StyledCodePurple>: [
                &apos;<StyledCodeGreen>JavaScript</StyledCodeGreen>&apos;,
                &apos;<StyledCodeGreen>Typescript</StyledCodeGreen>&apos;,
                &apos;<StyledCodeGreen>SQL</StyledCodeGreen>&apos;],
            </StyledTab>
            &#125;
            <div>&nbsp;</div>

            <div><StyledCodePurple>if</StyledCodePurple> (<StyledCodeBlue>you</StyledCodeBlue>.<StyledCodeBlue>search</StyledCodeBlue>.<StyledCodeOrange>includes</StyledCodeOrange>(&apos;<StyledCodeGreen>Web Dev</StyledCodeGreen>&apos;)  &#123;</div>
            <StyledTab>
                <StyledCodeOrange>hire</StyledCodeOrange>(<StyledCodeBlue>me</StyledCodeBlue>);
            </StyledTab>
            &#125;

        </StyledHomeTerminalBody>
    </StyledHomeTerminalWrapper>
);

export default HomeTerminal;