CREATE DATABASE MomMilk;
GO
USE MomMilk;
GO

CREATE TABLE [Admin] (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Email nvarchar(256) NOT NULL UNIQUE,
    Password nvarchar(256) NOT NULL,
    Name nvarchar(256) NOT NULL,
    AvatarUrl nvarchar(MAX)
);
GO

CREATE TABLE Store (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Name nvarchar(256) NOT NULL,
    Description nvarchar(MAX) NOT NULL,
    ThumbnailUrl nvarchar(MAX),
    Address nvarchar(256) NOT NULL
);
GO

CREATE TABLE StoreOwner (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Email nvarchar(256) NOT NULL UNIQUE,
    Password nvarchar(256) NOT NULL,
    Phone nvarchar(256),
    Name nvarchar(256) NOT NULL,
    AvatarUrl nvarchar(MAX),
    StoreId uniqueidentifier FOREIGN KEY REFERENCES Store(Id) UNIQUE,
    Status nvarchar(256) NOT NULL
);
GO

CREATE TABLE Customer (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Email nvarchar(256) NOT NULL UNIQUE,
    Password nvarchar(256) NOT NULL,
    Phone nvarchar(256),
    Name nvarchar(256) NOT NULL,
    AvatarUrl nvarchar(MAX),
    [Rank] nvarchar(256) NOT NULL,
    Status nvarchar(256) NOT NULL
);
GO

CREATE TABLE Category (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Name nvarchar(256) NOT NULL,
    TargetAudience nvarchar(256) NOT NULL,  -- VD: "Mother", "Baby"
    AgeRange nvarchar(256) NOT NULL,        -- VD: "0-6 months", "6-12 months"
    MilkType nvarchar(256) NOT NULL,        -- VD: "Powdered", "Liquid"
    Icon nvarchar(MAX)
);
GO

CREATE TABLE Product (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Name nvarchar(256) NOT NULL,
    Origin nvarchar(256) NOT NULL,
    Brand nvarchar(256) NOT NULL,
    Ingredient nvarchar(256),
    SweetLevel nvarchar(256),
    Flavour nvarchar(256),
    Sample nvarchar(256),
    Capacity nvarchar(256),
    Description nvarchar(MAX) NOT NULL,
    Price FLOAT NOT NULL,
    Quantity INT NOT NULL,
    ExpireAt datetime NOT NULL,
    StoreId uniqueidentifier FOREIGN KEY REFERENCES Store(Id) NOT NULL,
    CreateAt datetime NOT NULL DEFAULT GETDATE(),
    Status nvarchar(256) NOT NULL
);
GO


CREATE TABLE ProductCategory (
    Id uniqueidentifier UNIQUE NOT NULL,
    CategoryId uniqueidentifier FOREIGN KEY REFERENCES Category(Id) NOT NULL,
    ProductId uniqueidentifier FOREIGN KEY REFERENCES Product(Id) NOT NULL,
    PRIMARY KEY (CategoryId, ProductId)
);
GO


CREATE TABLE ProductImage (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Url nvarchar(MAX) NOT NULL,
    ProductId uniqueidentifier FOREIGN KEY REFERENCES Product(Id) NOT NULL,
    IsPrimary bit NOT NULL DEFAULT 0
);
GO

CREATE TABLE [Order] (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    CustomerId uniqueidentifier FOREIGN KEY REFERENCES Customer(Id) NOT NULL,
    [Address] nvarchar(256),
    Phone nvarchar(256),
    Recipient nvarchar(256),
    Amount FLOAT NOT NULL,
    PaymentMethod nvarchar(256),
    [Status] nvarchar(256) NOT NULL,  -- VD: "vẫn đang trong cart", "Đã Confirm mua hàng"
    CreateAt datetime NOT NULL DEFAULT GETDATE()
);
GO


CREATE TABLE OrderDetail (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    OrderId uniqueidentifier FOREIGN KEY REFERENCES [Order](Id) NOT NULL,
    ProductId uniqueidentifier FOREIGN KEY REFERENCES Product(Id) NOT NULL,
    Price FLOAT NOT NULL,
    Quantity INT NOT NULL
);
GO


CREATE TABLE [OrderTransaction] (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    CustomerId uniqueidentifier FOREIGN KEY REFERENCES Customer(Id) NOT NULL,
    OrderId uniqueidentifier FOREIGN KEY REFERENCES [Order](Id) NOT NULL,
    Status nvarchar(256) NOT NULL,
    CreateAt datetime NOT NULL DEFAULT GETDATE()
);
GO


CREATE TABLE Membership (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    Title nvarchar(256) NOT NULL,
    Description nvarchar(256) NOT NULL,
    Price FLOAT NOT NULL,
    StartDate datetime NOT NULL,
    [ExpireDate] datetime NOT NULL
);
GO


CREATE TABLE StoreOwnerMembership (
    Id uniqueidentifier UNIQUE NOT NULL,
    StoreOwnerId uniqueidentifier FOREIGN KEY REFERENCES StoreOwner(Id) NOT NULL,
    MembershipId uniqueidentifier FOREIGN KEY REFERENCES Membership(Id) NOT NULL,
    PRIMARY KEY (StoreOwnerId, MembershipId),
    Status nvarchar(256) NOT NULL,
    CreateAt datetime NOT NULL
);
GO

CREATE TABLE MembershipTransaction (
    Id uniqueidentifier UNIQUE NOT NULL,
    MembershipId uniqueidentifier FOREIGN KEY REFERENCES Membership(Id) NOT NULL,
    StoreOwnerId uniqueidentifier FOREIGN KEY REFERENCES StoreOwner(Id) NOT NULL,
    PRIMARY KEY (MembershipId, StoreOwnerId),
    Status nvarchar(256) NOT NULL,
    CreateAt datetime DEFAULT GETDATE()
);
GO


CREATE TABLE Feedback (
    Id uniqueidentifier PRIMARY KEY NOT NULL,
    CustomerId uniqueidentifier FOREIGN KEY REFERENCES Customer(Id) NOT NULL,
    OrderId uniqueidentifier FOREIGN KEY REFERENCES [Order](Id) NOT NULL,
    Content nvarchar(MAX) NOT NULL,
    RateStar INT NOT NULL,
    CreateAt datetime NOT NULL DEFAULT GETDATE()
);
GO
