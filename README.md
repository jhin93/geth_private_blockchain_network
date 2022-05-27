# own_geth_network

geth puppeth를 사용하여 프라이빗 네트워크를 구축한 공간입니다.


geth 명령어(https://www.mrlatte.net/research/2018/02/27/ethereum-geth.html  )
  - 계정 확인  
```
eth.accounts
```

  - 계정 잔고 확인  
```
eth.getBalance(eth.accounts[0])
eth.getBalance(eth.accounts[1])
eth.getBalance(eth.accounts[2])
```

  - 송금
```
eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: web3.toWei(10, "ether")})
```

  - Etherbase 확인
```
eth.coinbase
```

  - Etherbase 변경
```
miner.setEtherbase(eth.accounts[1])
```


attach 이후에 javascript로 수행 할 수 있는 명령어  
http://wiki.hash.kr/index.php/%EA%B2%8C%EC%8A%A4  
eth.accounts : 현재 생성된 계정 배열  
eth.blockNumber : 현재 채굴된 블록의 번호  
eth.hashrate : 현재 해시레이트  
eth.coinbase : 채굴이 진행되면 보상을 받을 계정. 보통 이것을 eth.accounts[0]과 동일하게 셋팅한다.  
eth.mining : 현재 채굴중인지 여부  
eth.getBalance(account) : 계좌 잔고 조회  
eth.getTranaction(tx) : 트랜잭션의 정보  
eth.sendTransaction({from:account, to:account, value:wei}) : 트랜잭션 보내기  
eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value:web3.toWei(1,"ether")})  
eth.pendingTransactions : 현재 진행을 기다리고 있는 트랜잭션  



POA(권위증명)
http://wiki.hash.kr/index.php/%EA%B6%8C%EC%9C%84%EC%A6%9D%EB%AA%85#.EC.9E.A5.EC.A0.90

POA(권위증명)이 프라이빗 네트워크와 어울리는 이유
https://m.blog.naver.com/mage7th/221718001743
https://yceffort.kr/2018/09/19/how-does-proof-of-authority-consensus-work


genesis file export 하는 법.  
https://brunch.co.kr/@skkrypto/79  
