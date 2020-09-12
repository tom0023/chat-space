!(file:///Users/tomitashinichi/Desktop/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202020-08-19%2020.46.38.png)


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
