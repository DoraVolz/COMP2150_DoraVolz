<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:i="http://sascs.net/sascs/instructors">

    <xsl:template match="/">
        <html>
            <body>
                <h1>SASCS Instructors</h1>
                <ul>
                <xsl:for-each select="i:instructors/i:instructor">
                    <li><xsl:value-of select="i:name"/> 
                    <ul>
                        <li>From: <xsl:value-of select="i:city"/>, <xsl:value-of select="i:state"/></li>
                        <li>Phone Number: <xsl:value-of select="i:phone"/></li> 
                        <li>Certifications: <xsl:value-of select="i:certification"/></li>
                    </ul>
                    </li>
                </xsl:for-each>    
                </ul>
            </body>
        </html>
    </xsl:template>    
</xsl:stylesheet>
