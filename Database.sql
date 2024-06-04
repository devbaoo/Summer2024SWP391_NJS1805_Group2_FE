Create Database SuaMe88
Go
Use SuaMe88
Go
Create Table [Admin] (
	[Id] uniqueidentifier primary key not null,
	[Email] nvarchar(256) not null unique,
	[Password] nvarchar(256) not null,
	[Name] nvarchar(256) not null,
	[AvatarUrl] nvarchar(max),
)
Go
Create Table Store (
	[Id] uniqueidentifier primary key not null,
	[Name] nvarchar(256) not null,
	[Description] nvarchar(max) not null,
	[ThumbnailUrl] nvarchar(max),
	[Address] nvarchar(256) not null,
)
Go
Create Table StoreOwner (
	[Id] uniqueidentifier primary key not null,
	[Email] nvarchar(256) not null unique,
	[Password] nvarchar(256) not null,
	[Phone] nvarchar(256),
	[Name] nvarchar(256) not null,
	[AvatarUrl] nvarchar(max),
	[StoreId] uniqueidentifier foreign key references Store(Id) unique,
	[Status] nvarchar(256) not null
)
Go
Create Table Customer (
	[Id] uniqueidentifier primary key not null,
	[Email] nvarchar(256) not null unique,
	[Password] nvarchar(256) not null,
	[Phone] nvarchar(256),
	[Name] nvarchar(256) not null,
	[AvatarUrl] nvarchar(max),
	[Rank] nvarchar (256) not null, -- Hangfire - Định kỳ hàng ngày sẽ quét bảng Order để xem Customer đã mua bao nhiêu tiền, nếu đạt đủ cột mốc sẽ update Rank
	[Status] nvarchar(256) not null
)
Go
Create Table CategoryGroup (
	[Id] uniqueidentifier primary key not null,
	[Name] nvarchar(256) not null,
)
Go
Create Table Category (
	[Id] uniqueidentifier primary key not null,
	[Name] nvarchar(256) not null,
	[CategoryGroupId] uniqueidentifier foreign key references CategoryGroup(Id) not null,
	[Icon] nvarchar(max)
)
Go
Create Table Product (
	[Id] uniqueidentifier primary key not null,
	[Name] nvarchar(256) not null,
	[Origin] nvarchar(256) not null,
	[Brand] nvarchar(256) not null,
	[Ingredient] nvarchar(256),
	[SweetLevel] nvarchar(256),
	[Flavour] nvarchar(256),
	[Sample] nvarchar(256),
	[Capacity] nvarchar(256),
	[Description] nvarchar(max) not null,
	[Price] float not null,
	[Quantity] int not null,
	[ExpireAt] datetime not null,
	[StoreId] uniqueidentifier foreign key references Store(Id) not null,
	[CreateAt] datetime not null default getdate(),
	[Status] nvarchar(256) not null
)
Go
Create Table ProductCategory (
	[Id] uniqueidentifier unique not null,
	[CategoryId] uniqueidentifier foreign key references Category(Id) not null,
	[ProductId] uniqueidentifier foreign key references Product(Id) not null,
	Primary key (CategoryId, ProductId)
)
Go
Create Table ProductImage (
	[Id] uniqueidentifier primary key not null,
	[Url] nvarchar(max) not null,
	[ProductId] uniqueidentifier foreign key references Product(Id) not null,
	[IsPrimary] bit not null default 0
)
Go
Create Table Cart (
	[Id] uniqueidentifier primary key not null,
	[CustomerId] uniqueidentifier foreign key references Customer(Id) unique not null,
)
Go
Create Table CartItem (
	[Id] uniqueidentifier primary key not null,
	[ProductId] uniqueidentifier foreign key references Product(Id) not null,
	[CartId] uniqueidentifier foreign key references Cart(Id) unique not null,
	[Quantity] int not null,
)
Go
Create Table [Order] (
	[Id] uniqueidentifier primary key not null,
	[CustomerId] uniqueidentifier foreign key references Customer(Id) not null,
	[Address] nvarchar(256) not null,
	[Phone] nvarchar(256) not null,
	[Recipient] nvarchar(256) not null,
	[Amount] float not null,
	[PaymentMethod] nvarchar(256) not null,
	[Status] nvarchar(256) not null,
)
Go
Create Table OrderDetail (
	[Id] uniqueidentifier primary key not null,
	[OrderId] uniqueidentifier foreign key references [Order](Id) not null,
	[ProductId] uniqueidentifier foreign key references Product(Id) not null,
	[Price] float not null,
	[Quantity] int not null,
)
Go
Create Table [OrderTransaction] (
	[Id] uniqueidentifier primary key not null,
	[CustomerId] uniqueidentifier foreign key references Customer(Id) not null,
	[OrderId] uniqueidentifier foreign key references [Order](Id) not null,
	[Status] nvarchar(256) not null,
	[CreateAt] datetime not null default getdate()
)
Go
Create Table Membership (
	[Id] uniqueidentifier primary key not null,
	[Title] nvarchar(256) not null,
	[Description] nvarchar(256) not null,
	[Price] float not null,
	[StartDate] datetime not null,
	[ExpireDate] datetime not null
)
Go
Create Table StoreOwnerMembership (
	[Id] uniqueidentifier unique not null,
	[StoreOwnerId] uniqueidentifier foreign key references StoreOwner(Id) not null,
	[MembershipId] uniqueidentifier foreign key references Membership(Id) not null,
	[Primary] key (StoreOwnerId, MembershipId),
	[Status] nvarchar(256) not null,
	[CreateAt] datetime not null
)
Go
Create Table MembershipTransaction (
	[Id] uniqueidentifier unique not null,
	[MembershipId] uniqueidentifier foreign key references Membership(Id) not null,
	[StoreOwnerId] uniqueidentifier foreign key references StoreOwner(Id) not null,
	Primary key (MembershipId, StoreOwnerId),
	[Status] nvarchar(256) not null,
	[CreateAt] datetime default getdate()
)
Go
Create Table Feedback (
	[Id] uniqueidentifier primary key not null,
	[CustomerId] uniqueidentifier foreign key references Customer(Id) not null,
	[OrderId] uniqueidentifier foreign key references [Order](Id) not null,
	[Content] nvarchar(max) not null,
	[RateStar] int not null,
	[CreateAt] datetime not null default getdate()
)
