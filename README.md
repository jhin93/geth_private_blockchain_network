# own_geth_network

geth puppeth를 사용하여 프라이빗 네트워크를 구축한 공간입니다.

geth 명령어(https://www.mrlatte.net/research/2018/02/27/ethereum-geth.html  )

계정 확인
eth.accounts

계정 잔고 확인
eth.getBalance(eth.accounts[0])
eth.getBalance(eth.accounts[1])
eth.getBalance(eth.accounts[2])


송금
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(10, "ether")})

Etherbase 확인
eth.coinbase

Etherbase 변경
miner.setEtherbase(eth.accounts[1])




POA(권위증명)
http://wiki.hash.kr/index.php/%EA%B6%8C%EC%9C%84%EC%A6%9D%EB%AA%85#.EC.9E.A5.EC.A0.90

POA(권위증명)이 프라이빗 네트워크와 어울리는 이유
https://m.blog.naver.com/mage7th/221718001743
https://yceffort.kr/2018/09/19/how-does-proof-of-authority-consensus-work


genesis file export 하는 법.  
https://brunch.co.kr/@skkrypto/79  
