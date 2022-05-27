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
```
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
```

geth로 프라이빗 네트워크와 연결하여 시작하는 데 사용되는 옵션
```
--networkid 특정 이더리움 네트워크를 식별합니다. 예를 들어 테스트넷 및 메인넷에는 고유한 네트워크 ID가 있습니다(기본값 : 1. MAINNET)
--identity 프라이빗 네트워크의 특정 노드를 식별하는 데 사용합니다.
--rpc 노드에서 JSON-RPC 인터페이스를 활성화합니다(기본값 : enabled).
--rpcapi RPC로 API를 사용하도록 설정합니다.
--datadir 블록체인 데이터 폴더
--port 같은 네트워크에 있는 다른 피어가 이 노드와 연결하는 데 사용하는 네트워크 수신 포트
--nodiscover 같은 networkid와 연결되어 같은 제네시스 블록을 참조하는 클라이언트가 노드를 찾지 못하게 합니다. 이 네트워크에 다른 노드를 수동으로 추가해야 합니다.
즉, 원래 geth에 접속하면 다른 연결된 노드를 자동으로 찾는데 그것을 막는 것. 빠른 테스트를 위해 채굴노드만 돌리거나 할 때 사용.
```


POA(권위증명)
http://wiki.hash.kr/index.php/%EA%B6%8C%EC%9C%84%EC%A6%9D%EB%AA%85#.EC.9E.A5.EC.A0.90

POA(권위증명)이 프라이빗 네트워크와 어울리는 이유
https://m.blog.naver.com/mage7th/221718001743
https://yceffort.kr/2018/09/19/how-does-proof-of-authority-consensus-work


genesis file export 하는 법.  
https://brunch.co.kr/@skkrypto/79  
