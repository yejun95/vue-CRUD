<template>
    <footer class="footer">
        <hr class="footer-hr">
        <div class="footer-in">
            <ul class="footer-first">
                <li>서비스이용약관</li>
                <li>UCG이용약관</li>
                <li>개인정보처리방침</li>
                <li>영상정보처리방침</li>
                <li>사이트맵</li>
            </ul>
            <p>고객상담팀(수신자요금부담) 000-000-0000 (상담시간 월~금 : AM 09:00 ~ PM 06:00)</p>
            <p>@ BJSYSTEMS CORPORATION. All rights reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterPage'
}
</script>

<style>

    .footer {
        width: 100%;
        height: 150px;
    }

    .footer-hr {
        margin: 15px 0;
        border: 1.5px solid rgb(187, 182, 182);
    }

    .footer-first {
        display: flex;
        justify-content: space-around;
    }

    .footer-in > p:nth-child(2) { text-align: center; padding: 9px 0;}
    .footer-in > p:nth-child(3) { text-align: center; }
</style>