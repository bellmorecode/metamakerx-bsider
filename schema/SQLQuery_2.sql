SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BsiderToken](
	[Id] [uniqueidentifier] NOT NULL,
	[VisitorId] [uniqueidentifier] NULL,
    [BroadsiderTokenId] [int] null, 
	[DisplayName] [nvarchar](1000) NULL,
	[MintDate] [datetimeoffset](7) NOT NULL,
	[TokenId] [int] NOT NULL,
	[OnChainDate] [datetimeoffset](7) NULL,
	[Txhash] [nvarchar](200) NULL,
	[ImagePath] [nvarchar](1000) NULL,
	[Burned] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BsiderToken] ADD PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BsiderToken] ADD  DEFAULT (newid()) FOR [Id]
GO
ALTER TABLE [dbo].[BsiderToken] ADD  DEFAULT (getutcdate()) FOR [MintDate]
GO
ALTER TABLE [dbo].[BsiderToken] ADD  DEFAULT ((0)) FOR [Burned]
GO
