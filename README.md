<img src="https://i.gyazo.com/dffaba078a77b3f6208417e0e984a13c.jpg" width="100%">


# **Chat-space**
グループチャットアプリです。<br>
グループ作成後、メッセージor画像投稿が可能です。<br><br>

## 実装機能
・グループ内メッセージチャット機能<br>
・ユーザー管理<br>
・グループ管理<br>
・AWSデプロイ済み<br>
・非同期通信<br>
・自動更新<br><br><br><br>



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false, foreign_key: true|

### Association
- has_many :groups through: groups_users
- has_many :groups_users
- has_many :messages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users through: groups_users
- has_many :groups_users
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
